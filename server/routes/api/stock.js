const request = require("superagent");

module.exports = app => {
  app.post("/api/stock/portfolio", function(req, res, next) {
    const apiKey = "demo";
    //Assuming look up the user
    // Retrieving the ticker symbols
    const tickers = ["MSFT"];

    //https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo

    let complete = 0;
    const results = [];

    for (let i = 0; i < tickers.length; i += 1) {
      let ticker = tickers[i];
      request
        .get("https://www.alphavantage.co/query")
        .query({ function: "TIME_SERIES_DAILY" })
        .query({ symbol: ticker })
        .query({ apikey: apiKey })
        .then(response => {
          complete += 1;
          results.push(response.body);
          if (complete === tickers.length) {
            //All tickers have finished their requests
            console.log("completed");

            res.send({
              success: true,
              message: "Ticker Info",
              results: results
            });
          }
        });
    }
  });
};

// API KEY = BXM16Z3F7IW708GG
