const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stockSchema = new Schema(
  {
    username: { type: String, required: true },
    symbol: String,
  },
  {
    timestamps: true,
  }
);

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
