import React, { Component } from "react";
import StockInfo from "./StockInfo";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, error: null, results: [] };
    this.fetchProfileStockInfo = this.fetchProfileStockInfo.bind(this);
  }

  componentDidMount() {
    this.fetchProfileStockInfo();
  }

  fetchProfileStockInfo() {
    fetch("/api/stock/portfolio", { method: "POST" })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({
            isLoading: false,
            results: json.results
          });
        } else {
          this.setState({
            isLoading: false,
            error: json.message
          });
        }
      });
  }

  render() {
    const { isLoading, error, results } = this.state;
    if (isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>
        </div>
      );
    }
    return (
      <div>
        <p>Profile</p>
        {results.map(result => (
          <StockInfo data={result} />
        ))}
      </div>
    );
  }
}

export default Profile;
