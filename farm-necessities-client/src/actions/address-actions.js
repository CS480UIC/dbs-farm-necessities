import * as api from '../api';
import * as actionTypes from '../constants/actionTypes';

export const createAddress = (addressData) => async (dispatch) => {
  try {
    const { data } = await api.createAddress(addressData);
    dispatch({ type: actionTypes.CREATE_ADDRESS, payload: { ...addressData, address_id: data.insertId } });
  } catch (error) {
    console.log('retrieveAddresses()', error);
  }
};

export const retrieveAddresses = () => async (dispatch) => {
  try {
    const { data } = await api.retrieveAddresses();
    dispatch({ type: actionTypes.RETRIEVE_ADDRESSES, payload: data });
  } catch (error) {
    console.log('retrieveAddresses()', error);
  }
};

export const updateAddress = (addressData) => async (dispatch) => {
  try {
    const { data } = await api.updateAddress(addressData);
    dispatch({ type: actionTypes.UPDATE_ADDRESS, payload: addressData });
  } catch (error) {
    console.log('updateAddress()', error);
  }
};

export const deleteAddress = (addressData) => async (dispatch) => {
  try {
    const { data } = await api.deleteAddress(addressData);
    dispatch({ type: actionTypes.DELETE_ADDRESS, payload: addressData });
  } catch (error) {
    console.log('deleteAddress()', error);
  }
};
