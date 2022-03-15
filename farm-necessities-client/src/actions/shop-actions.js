import * as api from '../api';
import * as actionTypes from '../constants/action-types';

// * Action Creators
export const fetchProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: actionTypes.FETCH_ALL_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductsByCategory = (activeCategory) => async (dispatch) => {
  try {
    const { data } = await api.fetchProductsByCategory(activeCategory);
    dispatch({ type: actionTypes.FETCH_PRODUCTS_BY_CATEGORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCategories();
    dispatch({ type: actionTypes.FETCH_ALL_CATEGORIES, payload: data });
  } catch (error) {
    console.log(error);
  }
};
