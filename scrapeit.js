const scrapeIt = require("scrape-it");

async function scrapeItExample() {
  const scrapeResult = await scrapeIt('https://slides.com/carboleda', {
    presentations: {
      listItem: 'li.deck.public',
      data: {
        title: 'span.deck-title-value',
        description: 'span.deck-description-value',
        link: {
          selector: 'a.deck-link',
          attr: 'href'
        }
      }
    }
  }).then(({ data, response }) => {
    console.log(`Status Code: ${response.statusCode}`)
    console.log(data)
  })
}

scrapeItExample();


// // Promise interface
// scrapeIt("https://ionicabizau.net", {
//   title: ".header h1"
//   , desc: ".header h2"
//   , avatar: {
//     selector: ".header img"
//     , attr: "src"
//   }
// }).then(({ data, response }) => {
//   console.log(`Status Code: ${response.statusCode}`)
//   console.log(data)
// })
//
//
//
//
// // Promise interface
//
// let scrape = {
//   url: "https://www.airbnb.com.pe",
//   headers: { "User-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246" }
// };
//
// scrapeIt(scrape, {
//   title: "h1"
// }).then(({ data, response }) => {
//   console.log(`Status Code: ${response.statusCode}`)
//   console.log(data)
// })




