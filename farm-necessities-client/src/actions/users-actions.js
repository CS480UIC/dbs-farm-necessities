import * as api from '../api';
import * as actionTypes from '../constants/actionTypes';

// * Action Creators
export const fetchUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    dispatch({ type: actionTypes.FETCH_USERS, payload: data });
  } catch (error) {
    console.log('fetch-users-error', error);
  }
};
