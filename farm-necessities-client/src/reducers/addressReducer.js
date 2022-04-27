/* eslint-disable import/no-anonymous-default-export */
import { CREATE_ADDRESS, RETRIEVE_ADDRESSES, UPDATE_ADDRESS, DELETE_ADDRESS } from '../constants/actionTypes';

export default (addresses = [], action) => {
  switch (action.type) {
    case CREATE_ADDRESS:
      return [...addresses, action.payload];
    case RETRIEVE_ADDRESSES:
      return action.payload;
    case UPDATE_ADDRESS:
      return addresses.map((address) => (address.address_id === action.payload.address_id ? action.payload : address));
    case DELETE_ADDRESS:
      return addresses.filter((address) => address.address_id !== action.payload.address_id);
    default:
      return addresses;
  }
};
