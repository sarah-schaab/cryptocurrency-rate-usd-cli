const CoinMarketCap = require("node-coinmarketcap");
const coinmarketcap = new CoinMarketCap();


const currencies = process.argv[2].split(',');
let currencyPrice = [];
let currencyData = {};

coinmarketcap.multi(coins => {
  currencies.forEach(function(currency) {
    let coinSymbol = (`${currency}`);
    let coinPrice = coins.get(`${currency}`).price_usd;
    currencyPrice.push(coinPrice);
  })
  for (i = 0; i < currencies.length; i++) {
    currencyData[currencies[i]] = currencyPrice[i];
  }
  console.log(currencyData);
});
