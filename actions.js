// components/redux/actions.js
import { ADD_TO_CART,REMOVE_FROM_CART } from './constants';

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};
// components/redux/actions.js

export const removeFromCart = (itemName) => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemName,
  };
};
