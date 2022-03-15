/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ALL_CATEGORIES, FETCH_ALL_PRODUCTS, FETCH_PRODUCTS_BY_CATEGORY } from '../constants/action-types';

export const categories = (categories = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORIES:
      return action.payload;
    default:
      return categories;
  }
};

export const products = (products = [], action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
    case FETCH_PRODUCTS_BY_CATEGORY:
      return action.payload;
    default:
      return products;
  }
};
