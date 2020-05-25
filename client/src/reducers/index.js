import { combineReducers } from 'redux';

import stockReducer from './stockReducer';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  stocks: stockReducer,
});
