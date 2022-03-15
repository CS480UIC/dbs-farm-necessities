/* eslint-disable import/no-anonymous-default-export */
import { FETCH_PAST_ORDERS, FETCH_PROFILE } from '../constants/action-types';

export const profile = (profile = {}, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return action.payload;
    default:
      return profile;
  }
};

export const pastOrders = (pastOrders = [], action) => {
  switch (action.type) {
    case FETCH_PAST_ORDERS:
      return action.payload;
    default:
      return pastOrders;
  }
};
