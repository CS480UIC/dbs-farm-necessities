import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const login = (formData) => API.post('/auth/login', formData);
export const signup = (formData) => API.post('/auth/signup', formData);

export const initializeDatabase = () => API.get('/initialize-database');
export const retrieveViewQuery = (view) => API.get(`/queries/${view}`);

export const fetchUsers = () => API.get('/user');

export const createAddress = (data) => API.post('/address', data);
export const retrieveAddresses = () => API.get('/address');
export const updateAddress = (data) => API.put('/address', data);
export const deleteAddress = (data) => API.delete('/address', { data: data });

export const createCart = (data) => API.post('/cart', data);
export const retrieveCarts = () => API.get('/cart');
export const updateCart = (data) => API.put('/cart', data);
export const deleteCart = (data) => API.delete('/cart', { data: data });

export const createProduct = (data) => API.post('/product', data);
export const retrieveProducts = () => API.get('/product');
export const updateProduct = (data) => API.put('/product', data);
export const deleteProduct = (data) => API.delete('/product', { data: data });

export const createOrderDetail = (data) => API.post('/order-detail', data);
export const retrieveOrderDetails = () => API.get('/order-detail');
export const updateOrderDetail = (data) => API.put('/order-detail', data);
export const deleteOrderDetail = (data) => API.delete('/order-detail', { data: data });
