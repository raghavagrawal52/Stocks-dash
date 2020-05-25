import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import StockInfo from './StockInfo';
import StockList from './StockList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/stocks/:id" exact component={StockInfo} />
              <Route path="/stocks" exact component={StockList} />
              {/* <Route path="/" exact component={GoogleAuth} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
