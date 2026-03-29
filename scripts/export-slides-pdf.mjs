import { spawn } from 'node:child_process';
import { access, readFile, rm } from 'node:fs/promises';
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

async function main() {
  const { serverProcess, targetUrl } = await ensureSiteIsServed();
  const executablePath = await resolveChromiumExecutable();
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
    await page.goto(targetUrl, { waitUntil: 'networkidle' });
    await page.emulateMedia({ media: 'screen' });
    await page.waitForSelector('.slide-section', { timeout: 30000 });
    await page.evaluate(() => document.fonts.ready);

    const { slideCount, linkCount } = await page.evaluate(async (viewport) => {
      const slides = Array.from(document.querySelectorAll('.slide-section'));
      for (const slide of slides) {
        slide.scrollIntoView({ block: 'start' });
        await new Promise((resolve) => setTimeout(resolve, 100));
        slide.querySelectorAll('img[loading="lazy"], iframe[loading="lazy"]').forEach((element) => {
          element.loading = 'eager';
        });
      }
      window.scrollTo(0, 0);

      for (const slide of slides) {
        slide.style.transform = 'none';
        slide.style.transformOrigin = 'top left';
        slide.style.overflow = 'visible';
        slide.style.height = `${viewport.height}px`;
        slide.style.minHeight = `${viewport.height}px`;
      }

      await new Promise((resolve) => requestAnimationFrame(() => resolve()));

      for (const slide of slides) {
        const rect = slide.getBoundingClientRect();
        const widthScale = rect.width > 0 ? viewport.width / rect.width : 1;
        const heightScale = slide.scrollHeight > 0 ? viewport.height / slide.scrollHeight : 1;
        const scale = Math.min(1, widthScale, heightScale);

        slide.style.setProperty('--export-scale', String(scale));
        slide.style.transform = `scale(${scale})`;
      }

      return {
        slideCount: slides.length,
        linkCount: document.querySelectorAll('a[href]').length,
      };
    }, VIEWPORT);

    if (!slideCount) {
      throw new Error('No .slide-section elements found.');
    }

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
          min-width: ${VIEWPORT.width}px !important;
          background: #000 !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          overflow: visible !important;
        }
        body * {
          animation: none !important;
          transition: none !important;
          caret-color: transparent !important;
          filter: none !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }
        #root,
        #root > div {
          width: ${VIEWPORT.width}px !important;
          min-width: ${VIEWPORT.width}px !important;
          overflow: visible !important;
        }
        #root > div > form,
        #root > div > div.fixed.bottom-4.left-4 {
          display: none !important;
        }
        .slide-section {
          width: ${VIEWPORT.width}px !important;
          height: ${VIEWPORT.height}px !important;
          min-height: ${VIEWPORT.height}px !important;
          max-height: ${VIEWPORT.height}px !important;
          overflow: visible !important;
          break-after: page !important;
          page-break-after: always !important;
          break-inside: avoid !important;
          page-break-inside: avoid !important;
          transform-origin: top left !important;
        }
        .slide-section:last-of-type {
          break-after: auto !important;
          page-break-after: auto !important;
        }
      `,
    });

    await page.evaluate(() => {
      const animations = document.getAnimations?.() ?? [];
      for (const animation of animations) {
        try {
          animation.finish();
        } catch {
          // Ignore non-finishable animations.
        }
      }

      // Force-reveal motion elements that remain in their pre-animation state during print export.
      const elements = Array.from(document.querySelectorAll('*'));
      for (const element of elements) {
        if (!(element instanceof HTMLElement)) continue;
        if (element.classList.contains('slide-section')) continue;

        const computed = window.getComputedStyle(element);
        const inlineOpacity = element.style.opacity;
        const inlineTransform = element.style.transform;

        if (Number.parseFloat(computed.opacity || '1') < 0.999 || inlineOpacity) {
          element.style.opacity = '1';
        }

        if (inlineTransform && inlineTransform !== 'none') {
          element.style.transform = 'none';
        }

        if (computed.visibility === 'hidden') {
          element.style.visibility = 'visible';
        }

        if (computed.backdropFilter && computed.backdropFilter !== 'none') {
          element.style.backdropFilter = 'none';
          element.style.webkitBackdropFilter = 'none';
        }
      }
    });
    await page.waitForTimeout(500);

    await page.pdf({
      path: PDF_PATH,
      width: `${VIEWPORT.width}px`,
      height: `${VIEWPORT.height}px`,
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    });

    const pdfPageCount = await getPdfPageCount(PDF_PATH);
    if (pdfPageCount !== slideCount) {
      throw new Error(`PDF page count mismatch: expected ${slideCount}, got ${pdfPageCount}.`);
    }

    const extractedText = await extractPdfText(PDF_PATH);
    if (!extractedText) {
      process.stdout.write('Warning: text extraction validation was unavailable or empty.\n');
    }

    process.stdout.write(`Exported ${slideCount} slides to ${PDF_PATH}\n`);
    process.stdout.write(`Detected ${linkCount} anchor elements before PDF export.\n`);
    process.stdout.write(`Validated ${pdfPageCount} PDF pages.\n`);
  } finally {
    await context.close();
    serverProcess?.kill('SIGTERM');
  }
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
});
