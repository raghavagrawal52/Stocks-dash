import React from 'react';
import { connect } from 'react-redux';
import { fetchStock } from '../actions';
import GoogleAuth from './GoogleAuth';

class StockInfo extends React.Component {
  componentDidMount() {
    this.props.fetchStock();
  }
  render() {
    console.log(this.props);
    if (!this.props.stocks) {
      return <div>Loading...</div>;
    } else {
      return this.props.stocks.map((stock) => {
        return (
          <div>
            <p>{stock.symbol}</p>
            <GoogleAuth />
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
