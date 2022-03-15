/* eslint-disable import/no-anonymous-default-export */
import { ADD_TO_CART, CART_LOADED, DELETE_FROM_CART, FETCH_CART, REDUCE_FROM_CART } from '../constants/action-types';

export const cart = (cart = [], action) => {
  switch (action.type) {
    case FETCH_CART:
      const cartFromDatabase = action.payload;
      cart = cart.map((item) => {
        const itemExistsInDatabaseCart = cartFromDatabase.findIndex((i) => i.product_id === item.product_id);
        if (itemExistsInDatabaseCart >= 0)
          return { ...item, quantity: (item.quantity += cartFromDatabase[itemExistsInDatabaseCart].quantity) };
        return item;
      });
      const remainingItems = cartFromDatabase.filter((item) => cart.findIndex((i) => i.product_id === item.product_id) < 0);
      return [...cart, ...remainingItems];
    case ADD_TO_CART:
      const itemExistsInCart = cart.findIndex((item) => item.product_id === action.payload.product_id);
      if (itemExistsInCart < 0 || cart.length === 0) return [...cart, { ...action.payload, quantity: 1 }];
      return cart.map((item) => {
        if (item.product_id === action.payload.product_id) return { ...item, quantity: (item.quantity += 1) };
        return item;
      });
    case REDUCE_FROM_CART:
      return cart
        .filter((item) => {
          if (item.product_id === action.payload.product_id) {
            if (item.quantity === 1) return false;
            return true;
          }
          return true;
        })
        .map((item) => {
          if (item.product_id === action.payload.product_id) return { ...item, quantity: (item.quantity -= 1) };
          return item;
        });
    case DELETE_FROM_CART:
      return cart.filter((item) => item.product_id !== action.payload.product_id);
    default:
      return cart;
  }
};

export const cartLoaded = (cartLoaded = false, action) => {
  switch (action.type) {
    case CART_LOADED:
      return action.payload;
    default:
      return cartLoaded;
  }
};
