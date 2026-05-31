const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

const PAGES = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/services', name: 'Services' },
  { path: '/projects', name: 'Projects' },
  { path: '/contact', name: 'Contact' },
  { path: '/case-studies/gridmaster', name: 'GridMaster Case Study' },
];

async function main() {
  const dir = path.join(__dirname, '..', 'screenshots');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });

  const pdfBuffers = [];

  for (const { path: route, name } of PAGES) {
    console.log(`Capturing ${route}...`);
    await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(1000);
    pdfBuffers.push(await page.pdf({ format: 'A3', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } }));
  }

  await browser.close();

  const merged = await PDFDocument.create();
  for (const buf of pdfBuffers) {
    const doc = await PDFDocument.load(buf);
    const pages = await merged.copyPages(doc, doc.getPageIndices());
    for (const p of pages) merged.addPage(p);
  }

  const outPath = path.join(__dirname, '..', 'OneBridge-Portfolio.pdf');
  fs.writeFileSync(outPath, await merged.save());
  console.log(`Portfolio PDF saved to ${outPath}`);
}

main().catch(console.error);
