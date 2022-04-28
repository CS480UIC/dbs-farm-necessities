import * as api from '../api';

const errorHandler = (error) => {
  if (error?.response?.status === 403) {
    alert('Login expired');
    window.location.href = '/auth';
  }
  console.log('error', error);
};

export const retrieveViewQuery = async (view) => {
  try {
    const { data } = await api.retrieveViewQuery(view);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const retrieveUsers = async () => {
  try {
    const { data } = await api.fetchUsers();
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const createAddress = async (newData) => {
  try {
    const { data } = await api.createAddress(newData);
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

export const updateAddress = async (updatedData) => {
  try {
    const { data } = await api.updateAddress(updatedData);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const deleteAddress = async (deletedData) => {
  try {
    const { data } = await api.deleteAddress(deletedData);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const createCart = async (newData) => {
  try {
    const { data } = await api.createCart(newData);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const retrieveCarts = async () => {
  try {
    const { data } = await api.retrieveCarts();
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const updateCart = async (updatedData) => {
  try {
    const { data } = await api.updateCart(updatedData);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const deleteCart = async (deletedData) => {
  try {
    const { data } = await api.deleteCart(deletedData);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const createProduct = async (newData) => {
  try {
    const { data } = await api.createProduct(newData);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const retrieveProducts = async () => {
  try {
    const { data } = await api.retrieveProducts();
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const updateProduct = async (updatedData) => {
  try {
    const { data } = await api.updateProduct(updatedData);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const deleteProduct = async (deletedData) => {
  try {
    const { data } = await api.deleteProduct(deletedData);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const createOrderDetail = async (newData) => {
  try {
    const { data } = await api.createOrderDetail(newData);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const retrieveOrderDetails = async () => {
  try {
    const { data } = await api.retrieveOrderDetails();
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const updateOrderDetail = async (updatedData) => {
  try {
    const { data } = await api.updateOrderDetail(updatedData);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};

export const deleteOrderDetail = async (deletedData) => {
  try {
    const { data } = await api.deleteOrderDetail(deletedData);
    return data;
  } catch (error) {
    errorHandler(error);
  }
};
