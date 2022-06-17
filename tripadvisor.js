const puppeteer = require('puppeteer')

async function scrape() {
   const browser = await puppeteer.launch({})
   const page = await browser.newPage()

   await page.goto('https://www.tripadvisor.com.pe/Restaurants-g294316-Lima_Lima_Region.html')
   var element = await page.waitFor("#title_48429200")
   var text = await page.evaluate(element => element.textContent, element)
   console.log(text)
   browser.close()
}
scrape()
