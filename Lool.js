const puppeteer = require('puppeteer');
require("dotenv").config();

const RunX = async (res, req) => {
const browser = await puppeteer.launch({
  args: [
    "--disable-setuid-sandbox",
    "--no-sandbox",
    "--single-process",
    "--no-zygote",
  ],
  executablePath:
    process.env.NODE_ENV === "production"
      ? process.env.PUPPETEER_EXECUTABLE_PATH
      : puppeteer.executablePath(),
});

try {
	
const page = await browser.newPage();

// Navigate the page to a URL.
await page.goto(req.query.b);

// Set screen size.
await page.setViewport({width: 1080, height: 1024});

// Type into search box.
await page.locator('#aoblogon_userid').fill(req.query.a);

// Wait and click on first result.
await page.locator('#aoblogon_submit').click();

// Locate the full title with a unique string.
await page.waitForSelector('.mt-20')
const divCount = await page.$eval('.mt-20', el => el.innerText);
const cleaner = divCount.split("Question:");
const cleaner2 = cleaner[1].split("Answer");
res.send(cleaner2[0]);

} catch(e){
	res.send('error'+ e);
}finally{
	await browser.close();	
}
};

module.exports = { RunX };