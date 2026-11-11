// Builds the one-page resume PDF from resume.template.html.
//   node build.js <output.pdf>                  -> public version, no phone number
//   PHONE="(555) 555-5555" node build.js out.pdf -> application version with a phone number
// Needs Node and Playwright with Chromium (npm i playwright && npx playwright install chromium).
const { chromium } = require('playwright');
const fs = require('fs'); const path = require('path');
(async () => {
  const out = process.argv[2] || 'Thea_Arcadia_Resume.pdf';
  let html = fs.readFileSync(path.join(__dirname, 'resume.template.html'), 'utf8');
  const phone = process.env.PHONE;
  html = html.replace('<!--PHONE-->', phone ? `<span>${phone}</span>` : '');
  const tmp = path.join(__dirname, '.build.html'); fs.writeFileSync(tmp, html);
  const browser = await chromium.launch(); const page = await browser.newPage();
  await page.goto('file://' + tmp); await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: out, format: 'Letter', preferCSSPageSize: true, printBackground: true });
  await browser.close(); fs.unlinkSync(tmp);
  console.log('wrote', out);
})();
