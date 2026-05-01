import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

const dir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const existing = fs.readdirSync(dir).filter(f => f.startsWith('screenshot-')).length;
const num = existing + 1;
const filename = label ? `screenshot-${num}-${label}.png` : `screenshot-${num}.png`;

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 1000));
// Scroll through the page to trigger IntersectionObserver reveals
await page.evaluate(async () => {
  const distance = 400;
  const delay = 100;
  const scrollHeight = document.body.scrollHeight;
  for (let i = 0; i < scrollHeight; i += distance) {
    window.scrollTo(0, i);
    await new Promise(r => setTimeout(r, delay));
  }
  window.scrollTo(0, 0);
  await new Promise(r => setTimeout(r, 500));
});
await page.screenshot({ path: path.join(dir, filename), fullPage: true });
await browser.close();
console.log(`Screenshot saved: temporary screenshots/${filename}`);
