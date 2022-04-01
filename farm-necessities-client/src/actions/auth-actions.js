import * as api from '../api';
import * as actionTypes from '../constants/actionTypes';

// * Action Creators
export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: actionTypes.AUTH, data });
    history('/users');
  } catch (error) {
    console.log('login-error', error);
    if (error.response?.data?.message) {
      alert(error.response.data.message);
    } else {
      alert('Sorry. Something went wrong!');
    }
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);
    dispatch({ type: actionTypes.AUTH, data });
    history('/users');
  } catch (error) {
    console.log('signup-error', error);
    if (error.response?.data?.message) {
      alert(error.response.data.message);
    } else {
      alert('Sorry. Something went wrong!');
    }
  }
};

export const logout = (history) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.LOGOUT });
    dispatch({ type: actionTypes.CLEAR_USERS });
    history('/');
  } catch (error) {
    console.log('logout-error', error);
  }
};
