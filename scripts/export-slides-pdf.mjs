import { spawn } from 'node:child_process';
import { access, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { chromium } from 'playwright';

const ROOT = process.cwd();
const HOST = '127.0.0.1';
const PORT = 4173;
const BASE_URL = `http://${HOST}:${PORT}/`;
const PDF_PATH = path.join(ROOT, 'slides.pdf');
const VIEWPORT = { width: 1920, height: 1080 };
const REAL_HOME = process.env.HOME || os.homedir();

process.env.HOME = ROOT;
process.env.XDG_CONFIG_HOME = path.join(ROOT, '.config');
process.env.XDG_CACHE_HOME = path.join(ROOT, '.cache');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function pathExists(targetPath) {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function resolveChromiumExecutable() {
  const browserCandidates = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  ];

  for (const candidate of browserCandidates) {
    if (await pathExists(candidate)) return candidate;
  }

  const playwrightPath = chromium.executablePath();
  if (await pathExists(playwrightPath)) return playwrightPath;

  const cacheRoot = path.join(REAL_HOME, 'Library/Caches/ms-playwright');
  if (!(await pathExists(cacheRoot))) return null;

  const arch = process.arch === 'arm64' ? 'arm64' : 'x64';
  const platform = process.platform === 'darwin' ? 'mac' : process.platform;
  const candidatePaths = [
    path.join(cacheRoot, 'chromium-1187', 'chrome-mac', 'Chromium.app', 'Contents', 'MacOS', 'Chromium'),
    path.join(
      cacheRoot,
      'chromium_headless_shell-1187',
      `chrome-headless-shell-${platform}-${arch}`,
      'chrome-headless-shell',
    ),
  ];

  for (const candidate of candidatePaths) {
    if (await pathExists(candidate)) return candidate;
  }

  return null;
}

function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, options);
    let stdout = '';
    let stderr = '';

    child.stdout?.on('data', (chunk) => {
      stdout += chunk.toString();
    });
    child.stderr?.on('data', (chunk) => {
      stderr += chunk.toString();
    });
    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0) {
        resolve({ stdout, stderr });
      } else {
        reject(new Error(stderr || `${command} ${args.join(' ')} failed with code ${code}`));
      }
    });
  });
}

async function isServerUp() {
  try {
    const response = await fetch(BASE_URL);
    return response.ok;
  } catch {
    return false;
  }
}

async function waitForServer(timeoutMs = 60000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (await isServerUp()) return true;
    await sleep(500);
  }
  return false;
}

function startPreviewServer() {
  return spawn('npm', ['run', 'preview', '--', '--host', HOST, '--port', String(PORT)], {
    cwd: ROOT,
    env: { ...process.env, BROWSER: 'none' },
    stdio: 'inherit',
  });
}

async function ensureSiteIsServed() {
  if (await isServerUp()) {
    return { serverProcess: null, targetUrl: BASE_URL };
  }

  await runCommand('npm', ['run', 'build'], { cwd: ROOT, stdio: 'inherit' });
  const serverProcess = startPreviewServer();
  const ready = await waitForServer();
  if (!ready) {
    serverProcess.kill('SIGTERM');
    throw new Error('Preview server did not become ready in time.');
  }

  return { serverProcess, targetUrl: BASE_URL };
}

async function getPdfPageCount(pdfPath) {
  try {
    const { stdout } = await runCommand('pdfinfo', [pdfPath], { cwd: ROOT });
    const match = stdout.match(/^Pages:\s+(\d+)$/m);
    if (match) return Number.parseInt(match[1], 10);
  } catch {
    // Fall through to mdls and text parsing.
  }

  try {
    const { stdout } = await runCommand('mdls', ['-name', 'kMDItemNumberOfPages', '-raw', pdfPath], { cwd: ROOT });
    const count = Number.parseInt(stdout.trim(), 10);
    if (Number.isFinite(count)) return count;
  } catch {
    // Ignore mdls failure and try PDF metadata parsing fallback.
  }

  const pdfText = await readFile(pdfPath, 'latin1');
  const matches = pdfText.match(/\/Type\s*\/Page\b/g);
  return matches ? matches.length : 0;
}

async function extractPdfText(pdfPath) {
  const tempTextPath = path.join(ROOT, '.slides-export-text.txt');
  try {
    await runCommand('pdftotext', [pdfPath, tempTextPath], { cwd: ROOT });
    const text = await readFile(tempTextPath, 'utf8');
    return text.trim();
  } catch {
    return '';
  } finally {
    await rm(tempTextPath, { force: true });
  }
}

async function getPdfLinkStats(pdfPath) {
  try {
    const { stdout } = await runCommand('qpdf', ['--json', pdfPath], { cwd: ROOT });
    const report = JSON.parse(stdout);
    const objects = report.qpdf?.[1] || {};
    let totalAnnotations = 0;
    let externalLinks = 0;
    let internalLinks = 0;

    for (const objectEntry of Object.values(objects)) {
      if (!objectEntry || typeof objectEntry !== 'object') continue;

      const annotation = objectEntry.value;
      if (!annotation || typeof annotation !== 'object') continue;
      if (annotation['/Subtype'] !== '/Link') continue;

      totalAnnotations += 1;

      const action = annotation['/A'];
      const destination = annotation['/Dest'];
      if (action?.['/URI']) {
        externalLinks += 1;
      } else if (destination || action?.['/S'] === '/GoTo') {
        internalLinks += 1;
      }
    }

    return { totalAnnotations, externalLinks, internalLinks };
  } catch (error) {
    const tempJsonPath = path.join(ROOT, '.slides-export-qpdf-error.json');
    try {
      await writeFile(tempJsonPath, String(error?.stack || error), 'utf8');
    } catch {
      // Ignore debug write failures.
    }
    throw error;
  }
}

async function injectPdfLinks(pdfPath, links) {
  const tempLinksPath = path.join(ROOT, '.slides-export-links.json');
  const tempOutputPath = path.join(ROOT, '.slides-export-with-links.pdf');

  try {
    await writeFile(tempLinksPath, JSON.stringify({ viewport: VIEWPORT, links }, null, 2), 'utf8');
    await runCommand(
      'python3',
      [
        '-c',
        `
import json
from pathlib import Path
from pypdf import PdfReader, PdfWriter
from pypdf.generic import ArrayObject, NameObject

links_path = Path(${JSON.stringify(tempLinksPath)})
pdf_path = Path(${JSON.stringify(pdfPath)})
output_path = Path(${JSON.stringify(tempOutputPath)})

payload = json.loads(links_path.read_text())
viewport_width = payload["viewport"]["width"]
viewport_height = payload["viewport"]["height"]
links = payload["links"]

reader = PdfReader(str(pdf_path))
writer = PdfWriter()
writer.clone_document_from_reader(reader)

for page in writer.pages:
    annots = page.get("/Annots")
    if annots:
        kept = ArrayObject()
        for annot in annots:
            obj = annot.get_object()
            if obj.get("/Subtype") != "/Link":
                kept.append(annot)
        if kept:
            page[NameObject("/Annots")] = kept
        elif "/Annots" in page:
            del page[NameObject("/Annots")]

for link in links:
    page_index = link["pageIndex"]
    if page_index < 0 or page_index >= len(writer.pages):
        continue

    page = writer.pages[page_index]
    page_width = float(page.mediabox.width)
    page_height = float(page.mediabox.height)
    scale_x = page_width / viewport_width
    scale_y = page_height / viewport_height

    x1 = max(0, min(page_width, link["x"] * scale_x))
    x2 = max(0, min(page_width, (link["x"] + link["width"]) * scale_x))
    y1 = max(0, min(page_height, page_height - ((link["y"] + link["height"]) * scale_y)))
    y2 = max(0, min(page_height, page_height - (link["y"] * scale_y)))

    if x2 <= x1 or y2 <= y1:
        continue

    rect = (x1, y1, x2, y2)
    if link["type"] == "internal" and link.get("targetPageIndex") is not None:
        target_index = link["targetPageIndex"]
        if 0 <= target_index < len(writer.pages):
            writer.add_link(page_index, target_index, rect, fit="/Fit")
    else:
        writer.add_uri(page_index, link["href"], rect)

with output_path.open("wb") as fh:
    writer.write(fh)
        `,
      ],
      { cwd: ROOT },
    );

    await rm(pdfPath, { force: true });
    await runCommand('mv', [tempOutputPath, pdfPath], { cwd: ROOT });
  } finally {
    await rm(tempLinksPath, { force: true });
    await rm(tempOutputPath, { force: true });
  }
}

async function mergePdfPages(sourceDir, outputPath) {
  const tempOutputPath = path.join(ROOT, '.slides-export-merged.pdf');

  try {
    await runCommand(
      'python3',
      [
        '-c',
        `
from pathlib import Path
from pypdf import PdfReader, PdfWriter

source_dir = Path(${JSON.stringify(sourceDir)})
output_path = Path(${JSON.stringify(tempOutputPath)})
writer = PdfWriter()

for pdf_path in sorted(source_dir.glob("slide-*.pdf")):
    writer.append(str(pdf_path))

with output_path.open("wb") as fh:
    writer.write(fh)
        `,
      ],
      { cwd: ROOT },
    );

    await rm(outputPath, { force: true });
    await runCommand('mv', [tempOutputPath, outputPath], { cwd: ROOT });
  } finally {
    await rm(tempOutputPath, { force: true });
  }
}

async function preparePerSlideExport(page) {
  await page.addStyleTag({
    content: `
      @page {
        size: ${VIEWPORT.width}px ${VIEWPORT.height}px;
        margin: 0;
      }
      html, body {
        margin: 0 !important;
        padding: 0 !important;
        width: ${VIEWPORT.width}px !important;
        height: ${VIEWPORT.height}px !important;
        overflow: hidden !important;
        background: #000 !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      body.__pdf-export-mode > *:not(#__pdf-export-host) {
        visibility: hidden !important;
      }
      body.__pdf-export-mode #__pdf-export-host,
      body.__pdf-export-mode #__pdf-export-host * {
        visibility: visible !important;
      }
      body.__pdf-export-mode #__pdf-export-host {
        position: fixed !important;
        inset: 0 !important;
        width: ${VIEWPORT.width}px !important;
        height: ${VIEWPORT.height}px !important;
        overflow: hidden !important;
        z-index: 2147483647 !important;
        pointer-events: none !important;
      }
      body.__pdf-export-mode #__pdf-export-host > .__pdf-export-slide {
        width: ${VIEWPORT.width}px !important;
        height: ${VIEWPORT.height}px !important;
        min-height: ${VIEWPORT.height}px !important;
        max-height: ${VIEWPORT.height}px !important;
        margin: 0 !important;
        overflow: hidden !important;
        break-after: auto !important;
        page-break-after: auto !important;
      }
      body.__pdf-export-mode #__pdf-export-host a {
        pointer-events: auto !important;
      }
      body.__pdf-export-mode * {
        animation: none !important;
        transition: none !important;
        caret-color: transparent !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
      }
    `,
  });
}

async function renderSingleSlidePdf(page, slideIndex, pdfPath) {
  return page.evaluate(
    async ({ slideIndex, viewport }) => {
      const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));
      const slides = Array.from(document.querySelectorAll('.slide-section'));
      const sourceSlide = slides[slideIndex];
      if (!sourceSlide) {
        throw new Error(`Slide ${slideIndex + 1} not found.`);
      }

      sourceSlide.scrollIntoView({ block: 'start' });
      await wait(120);

      const animations = document.getAnimations?.() ?? [];
      for (const animation of animations) {
        try {
          animation.finish();
        } catch {
          // Ignore animations that cannot be force-finished.
        }
      }

      let host = document.getElementById('__pdf-export-host');
      if (!host) {
        host = document.createElement('div');
        host.id = '__pdf-export-host';
        document.body.appendChild(host);
      }

      host.innerHTML = '';
      document.body.classList.add('__pdf-export-mode');

      const clone = sourceSlide.cloneNode(true);
      clone.classList.add('__pdf-export-slide');
      host.appendChild(clone);

      const cloneElements = Array.from(clone.querySelectorAll('*'));
      for (const element of cloneElements) {
        if (!(element instanceof HTMLElement)) continue;
        const style = window.getComputedStyle(element);
        if (style.visibility === 'hidden') {
          element.style.visibility = 'visible';
        }
        if (element.style.opacity || Number.parseFloat(style.opacity || '1') < 0.999) {
          element.style.opacity = '1';
        }
        if (element.style.transform) {
          element.style.transform = 'none';
        }
      }

      clone.style.transform = 'none';
      clone.style.transformOrigin = 'top left';

      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

      const cloneRect = clone.getBoundingClientRect();
      const widthScale = cloneRect.width > 0 ? viewport.width / cloneRect.width : 1;
      const heightScale = clone.scrollHeight > 0 ? viewport.height / clone.scrollHeight : 1;
      const scale = Math.min(1, widthScale, heightScale);

      if (scale < 1) {
        clone.style.transform = `scale(${scale})`;
      }

      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

      const finalRect = clone.getBoundingClientRect();
      const classifyLink = (href) => {
        try {
          const url = new URL(href, window.location.href);
          if (url.origin === window.location.origin && url.pathname === window.location.pathname && url.hash) {
            return { type: 'internal', url };
          }
          return { type: 'external', url };
        } catch {
          return { type: 'external', url: null };
        }
      };

      const links = Array.from(clone.querySelectorAll('a[href]'))
        .map((link) => {
          const rect = link.getBoundingClientRect();
          const style = window.getComputedStyle(link);
          if (rect.width <= 0 || rect.height <= 0 || style.visibility === 'hidden' || style.display === 'none') {
            return null;
          }

          const hrefAttr = link.getAttribute('href') || '';
          const classification = classifyLink(hrefAttr);
          const targetPageIndex = (() => {
            if (classification.type !== 'internal' || !classification.url?.hash) return null;
            const targetId = decodeURIComponent(classification.url.hash.slice(1));
            const target =
              document.getElementById(targetId) ||
              document.querySelector(`[name="${CSS.escape(targetId)}"]`);
            if (!target) return null;
            const targetSlide = target.closest('.slide-section');
            return slides.indexOf(targetSlide);
          })();

          return {
            href: classification.url ? classification.url.toString() : hrefAttr,
            pageIndex: slideIndex,
            targetPageIndex,
            type: classification.type,
            x: Math.max(0, rect.left - finalRect.left),
            y: Math.max(0, rect.top - finalRect.top),
            width: Math.min(viewport.width, rect.width),
            height: Math.min(viewport.height, rect.height),
          };
        })
        .filter(Boolean);

      return {
        links,
        scale,
      };
    },
    { slideIndex, viewport: VIEWPORT },
  ).then(async (result) => {
    await page.pdf({
      path: pdfPath,
      width: `${VIEWPORT.width}px`,
      height: `${VIEWPORT.height}px`,
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
      pageRanges: '1',
    });
    return result;
  });
}

async function main() {
  const { serverProcess, targetUrl } = await ensureSiteIsServed();
  const executablePath = await resolveChromiumExecutable();
  const tempPageDir = path.join(ROOT, '.slides-export-pages');
  const context = await chromium.launchPersistentContext(
    path.join(ROOT, '.chromium-profile-export'),
    {
      headless: true,
      args: ['--disable-crash-reporter', '--disable-features=Crashpad'],
      viewport: { ...VIEWPORT, deviceScaleFactor: 1 },
      ...(executablePath ? { executablePath } : {}),
    },
  );

  const page = await context.newPage();

  try {
    await rm(tempPageDir, { recursive: true, force: true });
    await mkdir(tempPageDir, { recursive: true });

    await page.goto(targetUrl, { waitUntil: 'networkidle' });
    await page.emulateMedia({ media: 'screen' });
    await page.waitForSelector('.slide-section', { timeout: 30000 });
    await page.evaluate(async () => {
      if (document.fonts?.ready) await document.fonts.ready;
    });

    const deckStats = await page.evaluate(async () => {
      const slides = Array.from(document.querySelectorAll('.slide-section'));
      if (!slides.length) {
        return {
          slideCount: 0,
        };
      }

      const eagerCandidates = Array.from(document.querySelectorAll('img[loading="lazy"], iframe[loading="lazy"]'));
      for (const element of eagerCandidates) {
        element.loading = 'eager';
      }

      return {
        slideCount: slides.length,
      };
    });

    if (!deckStats.slideCount) {
      throw new Error('No .slide-section elements found.');
    }

    await preparePerSlideExport(page);

    const allLinks = [];
    const scales = [];
    for (let slideIndex = 0; slideIndex < deckStats.slideCount; slideIndex += 1) {
      const slidePdfPath = path.join(tempPageDir, `slide-${String(slideIndex + 1).padStart(3, '0')}.pdf`);
      const result = await renderSingleSlidePdf(page, slideIndex, slidePdfPath);
      allLinks.push(...result.links);
      scales.push(result.scale);
      process.stdout.write(`Rendered slide ${slideIndex + 1}/${deckStats.slideCount}\n`);
    }

    await mergePdfPages(tempPageDir, PDF_PATH);
    await injectPdfLinks(PDF_PATH, allLinks);

    const pdfPageCount = await getPdfPageCount(PDF_PATH);
    if (pdfPageCount !== deckStats.slideCount) {
      throw new Error(`PDF page count mismatch: expected ${deckStats.slideCount}, got ${pdfPageCount}.`);
    }

    const extractedText = await extractPdfText(PDF_PATH);
    if (!extractedText) {
      throw new Error('PDF text extraction returned empty content.');
    }

    const pdfLinkStats = await getPdfLinkStats(PDF_PATH);
    const visibleExternalLinkCount = allLinks.filter((link) => link.type === 'external').length;
    const visibleInternalLinkCount = allLinks.filter((link) => link.type === 'internal').length;
    if (allLinks.length > 0 && pdfLinkStats.totalAnnotations === 0) {
      throw new Error('PDF does not contain any link annotations.');
    }
    if (pdfLinkStats.externalLinks < visibleExternalLinkCount) {
      throw new Error(
        `PDF external link annotation mismatch: expected at least ${visibleExternalLinkCount}, got ${pdfLinkStats.externalLinks}.`,
      );
    }
    if (visibleInternalLinkCount > 0 && pdfLinkStats.internalLinks < visibleInternalLinkCount) {
      throw new Error(
        `PDF internal link annotation mismatch: expected at least ${visibleInternalLinkCount}, got ${pdfLinkStats.internalLinks}.`,
      );
    }

    process.stdout.write(`Exported ${deckStats.slideCount} slides to ${PDF_PATH}\n`);
    process.stdout.write(`Validated ${pdfPageCount} PDF pages.\n`);
    process.stdout.write(`Validated selectable text via pdftotext.\n`);
    process.stdout.write(
      `Validated ${pdfLinkStats.totalAnnotations} PDF link annotations (${pdfLinkStats.externalLinks} external, ${pdfLinkStats.internalLinks} internal).\n`,
    );
    process.stdout.write(
      `Applied scaling to ${scales.filter((scale) => scale < 0.999).length} slides to prevent overflow.\n`,
    );
  } finally {
    await context.close();
    serverProcess?.kill('SIGTERM');
    await rm(tempPageDir, { recursive: true, force: true });
  }
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
});
