import * as api from '../api';
import * as actionTypes from '../constants/action-types';

// * Action Creators
export const fetchCart = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCart();
    dispatch({ type: actionTypes.FETCH_CART, payload: data });
    dispatch({ type: actionTypes.CART_LOADED, payload: true });
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: item });
  } catch (error) {
    console.log(error);
  }
};

export const reduceFromCart = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.REDUCE_FROM_CART, payload: item });
  } catch (error) {
    console.log(error);
  }
};

export const deleteFromCart = (item) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.DELETE_FROM_CART, payload: item });
  } catch (error) {
    console.log(error);
  }
};
