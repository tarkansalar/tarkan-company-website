import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, 'temporary screenshots');

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 2000));

await page.evaluate(() => {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
});
await new Promise(r => setTimeout(r, 500));

// Scroll to mid-credentials to see photo
await page.evaluate(() => {
  const el = document.querySelector('#credentials');
  if (el) el.scrollIntoView({ behavior: 'instant', block: 'end' });
});
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: path.join(dir, 'screenshot-23-cred-photo.png') });

// Counter section bottom (nature photo)
await page.evaluate(() => {
  const el = document.querySelector('#counter');
  if (el) {
    const imgs = el.querySelectorAll('img');
    if (imgs.length) imgs[0].scrollIntoView({ behavior: 'instant', block: 'center' });
  }
});
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: path.join(dir, 'screenshot-24-counter-photo.png') });

// Story section photo
await page.evaluate(() => {
  const el = document.querySelector('#story');
  if (el) {
    const imgs = el.querySelectorAll('img');
    if (imgs.length) imgs[0].scrollIntoView({ behavior: 'instant', block: 'center' });
  }
});
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: path.join(dir, 'screenshot-25-story-photo.png') });

// Proof section - carousel area
await page.evaluate(() => {
  const el = document.querySelector('#testiCarousel');
  if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
});
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: path.join(dir, 'screenshot-26-carousel.png') });

await browser.close();
console.log('Photo detail screenshots saved');
