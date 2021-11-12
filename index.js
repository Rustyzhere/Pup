const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://rustylsimmons.com");

  await page.screenshot({ path: "example2.png" });

  await browser.close();
})();
