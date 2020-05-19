const fetch = require("node-fetch");
const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");

const setAsync = promisify(client.set).bind(client);

const baseURL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com";

async function fetchYahoo() {
  const allStocks = [];
  const res = await fetch(`${baseURL}/market/get-summary`);
  const stocks = await res.json();
  allStocks.push(...stocks);
  let resultCount = stocks.length;
  console.log("got", resultCount, "jobs");

  const success = await setAsync("yahoo", JSON.string(stocks));
  console.log(success);
}

fetchYahoo();

module.exports = fetchYahoo;
