// redux/reducer.js

import { ADD_TO_CART, REMOVE_FROM_CART } from './constants';

const initialState = {
  cartItems: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.name !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
