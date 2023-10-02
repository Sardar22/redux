// components/redux/rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from './reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here if needed
});

export default rootReducer;
