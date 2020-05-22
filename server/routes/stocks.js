const router = require("express").Router();
let Stock = require("../models/stocks.model");
const request = require("superagent");

router.route("/").get((req, res) => {
  Stock.find()
    .then((stocks) => res.json(stocks))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  // const username = req.body.username;

  const response = request
    .get("https://www.alphavantage.co/query")
    .query({ symbol: "MSFT" });

  const stock = response.body;
  const newStock = new Stock({ stock });

  newStock
    .save()
    .then(() => res.json("Stock added !"))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;

// const request = require("superagent");

// module.exports = (app) => {
//   app.post("/api/stock/portfolio", function (req, res, next) {
//     //Assuming look up the user
//     // Retrieving the ticker symbols
//     const tickers = ["MSFT"];

//     //https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo

//     let complete = 0;
//     const results = [];

//     for (let i = 0; i < tickers.length; i += 1) {
//       let ticker = tickers[i];
//       request
//         .get("https://www.alphavantage.co/query")
//         .query({ function: "TIME_SERIES_DAILY_ADJUSTED" })
//         .query({ symbol: ticker })
//         .query({ apikey: apiKey })
//         .then((response) => {
//           complete += 1;
//           results.push(response.body);
//           if (complete === tickers.length) {
//             //All tickers have finished their requests
//             console.log("completed");

//             res.send({
//               success: true,
//               message: "Ticker Info",
//               results: results,
//             });
//           }
//         });
//     }
//   });
// };
