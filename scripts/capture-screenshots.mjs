// Usage: npm i -D playwright && npx playwright install chromium && npm run screenshots
// Captures desktop + mobile screenshots of live projects into public/projects/<folder>/
import { chromium } from "playwright";
import fs from "node:fs";
const targets = [
  { folder: "tarini925", url: "https://tarini925.com/" },
  { folder: "kssb-global", url: "https://kssbglobal.com/" },
  // { folder: "thara-thai-spa", url: "https://ADD-VERIFIED-URL" },
];
const browser = await chromium.launch();
for (const t of targets) {
  fs.mkdirSync(`public/projects/${t.folder}`, { recursive: true });
  const d = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await d.goto(t.url, { waitUntil: "networkidle" }); await d.waitForTimeout(1500);
  await d.screenshot({ path: `public/projects/${t.folder}/desktop.png` });
  const m = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  await m.goto(t.url, { waitUntil: "networkidle" }); await m.waitForTimeout(1500);
  await m.screenshot({ path: `public/projects/${t.folder}/mobile.png` });
  console.log("captured", t.folder);
}
await browser.close();
console.log("Now set imageReady: true for these projects in src/data/projects.ts");
