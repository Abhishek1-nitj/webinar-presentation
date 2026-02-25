import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import http from 'node:http';

const HOST = '127.0.0.1';
const PORT = 4173;
const URL = `http://${HOST}:${PORT}/`;

const waitForServer = async () => {
  for (let i = 0; i < 120; i += 1) {
    try {
      await new Promise((resolve, reject) => {
        const req = http.get(URL, res => {
          res.resume();
          res.statusCode === 200 ? resolve() : reject(new Error('Bad status'));
        });
        req.on('error', reject);
      });
      return;
    } catch {
      await delay(500);
    }
  }
  throw new Error('Preview server did not become ready in time.');
};

const preview = spawn('npm', ['run', 'preview', '--', '--host', HOST, '--port', String(PORT)], {
  stdio: 'inherit',
  shell: true,
});

const shutdown = async () => {
  if (!preview.killed) {
    preview.kill();
  }
};

try {
  await waitForServer();

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
  });

  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForSelector('.slide-section');
  await page.evaluate(() => document.fonts.ready);

  await page.addStyleTag({
    content: `
      @page { size: 1920px 1080px; margin: 0; }
      html, body { margin: 0; padding: 0; width: 100%; height: 100%; }
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .slide-section { break-after: page; page-break-after: always; }
      * { animation: none !important; transition: none !important; }
    `,
  });

  await page.evaluate(async () => {
    const slides = Array.from(document.querySelectorAll('.slide-section'));
    for (const slide of slides) {
      slide.scrollIntoView({ behavior: 'instant', block: 'start' });
      await new Promise(resolve => setTimeout(resolve, 80));
    }
    window.scrollTo(0, 0);
  });

  await page.pdf({
    path: 'slides.pdf',
    width: '1920px',
    height: '1080px',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    preferCSSPageSize: true,
  });

  await browser.close();
  await shutdown();
} catch (error) {
  await shutdown();
  throw error;
}
