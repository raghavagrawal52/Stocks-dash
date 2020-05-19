import React, { Component } from "react";
import StockList from "./StockList";
import CurrentStock from "./CurrentStock";
import SearchBar from "./SearchBar";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <StockList />
        <CurrentStock />
      </div>
    );
  }
}
