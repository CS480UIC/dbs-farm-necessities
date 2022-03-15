import * as api from '../api';
import * as actionTypes from '../constants/action-types';

// * Action Creators
export const fetchProfile = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProfile();
    dispatch({ type: actionTypes.FETCH_PROFILE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchPastOrders = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPastOrders();
    dispatch({ type: actionTypes.FETCH_PAST_ORDERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
