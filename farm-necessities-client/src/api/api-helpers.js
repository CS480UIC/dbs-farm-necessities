import * as api from '../api';

const errorHandler = (error) => {
  if (error?.response?.status === 403) {
    alert('Login expired');
    window.location.href = '/auth';
  }
  console.log('error', error);
};

export const retrieveUsers = async () => {
  try {
    const { data } = await api.fetchUsers();
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const createAddress = async (newAddress) => {
  try {
    const { data } = await api.createAddress(newAddress);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const retrieveAddresses = async () => {
  try {
    const { data } = await api.retrieveAddresses();
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const updateAddress = async (updatedAddress) => {
  try {
    const { data } = await api.updateAddress(updatedAddress);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const deleteAddress = async (deletedAddress) => {
  try {
    const { data } = await api.deleteAddress(deletedAddress);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};
