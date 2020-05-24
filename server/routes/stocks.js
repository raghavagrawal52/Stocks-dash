const router = require('express').Router();
const bodyParser = require('body-parser');
const request = require('request');
let Stock = require('../models/stocks.model');

router.use(bodyParser.urlencoded({ extended: true }));

const API_KEY = 'demo';
const inputStock = 'IBM';

router.route('/').get((req, res) => {
  Stock.find()
    .then((stocks) => res.json(stocks))
    .catch((err) => res.status(400).json('Error:' + err));
});
const keyword = '';
router
  .route('/add')
  .get((req, res) => {
    keyword = req.query.keyword;
  })
  .post((req, res) => {
    const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&symbol=${keyword}&apikey=${API_KEY}`;
    request(
      {
        uri: url,
        method: 'GET',
        timeout: 10000,
        followRedirect: true,
        maxRedirects: 10,
      },
      async function (error, response, body) {
        const i = await JSON.parse(body);
        const symbol = i['Meta Data']['2. Symbol'];
        const current = Number(
          Object.values(i['Time Series (Daily)'])[0]['4. close']
        );
        let chartInfo = i['Time Series (Daily)'];
        console.log(chartInfo);
        // current = Number(current);
        const newStock = new Stock({ symbol, current });

        newStock
          .save()
          .then(() => res.json('Stock added !'))
          .catch((err) => res.status(400).json('Error:' + err));
      }
    );
  });

module.exports = router;
