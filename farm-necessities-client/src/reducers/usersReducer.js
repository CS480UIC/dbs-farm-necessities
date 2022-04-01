/* eslint-disable import/no-anonymous-default-export */
import { FETCH_USERS, CLEAR_USERS } from '../constants/actionTypes';

export default (users = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    case CLEAR_USERS:
      return [];
    default:
      return users;
  }
};
