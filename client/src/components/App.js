import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import StockInfo from './StockInfo';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/" exact component={StockInfo} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
