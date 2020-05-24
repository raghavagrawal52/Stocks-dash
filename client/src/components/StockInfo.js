import React from 'react';
import { connect } from 'react-redux';
import { fetchStock } from '../actions';

class StockInfo extends React.Component {
  componentDidMount() {
    this.props.fetchStock();
  }
  render() {
    if (!this.props.stocks) {
      return <div>Loading...</div>;
    } else {
      return this.props.stocks.map((stock) => {
        return (
          <div>
            <p>{stock.symbol}</p>
            <p>Stock X</p>
          </div>
        );
      });
    }
  }
}

const mapStateToProps = (state) => {
  return { stocks: Object.values(state.stocks) };
};

export default connect(mapStateToProps, { fetchStock })(StockInfo);
