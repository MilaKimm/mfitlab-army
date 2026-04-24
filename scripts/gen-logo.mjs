import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = 'file:///' + path.join(__dirname, 'gen-logo.html').replace(/\\/g, '/');
const outDir = path.join(__dirname, '..', '..', '오피셜 리소스');

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(htmlPath);
await page.waitForTimeout(1000);

const h = page.locator('#horizontal .logo');
await h.screenshot({ path: path.join(outDir, 'mfl_army_logo_horizontal.png'), omitBackground: true });

const v = page.locator('#vertical .logo');
await v.screenshot({ path: path.join(outDir, 'mfl_army_logo_vertical.png'), omitBackground: true });

await browser.close();
console.log('Logos saved to 오피셜 리소스/');
