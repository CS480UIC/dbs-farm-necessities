import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
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

export const createCategory = (data) => API.post('/category', data);
export const retrieveCategories = () => API.get('/category');
export const updateCategory = (data) => API.put('/category', data);
export const deleteCategory = (data) => API.delete('/category', { data: data });

export const createPaymentDetail = (data) => API.post('/payment-detail', data);
export const retrievePaymentDetails = () => API.get('/payment-detail');
export const updatePaymentDetail = (data) => API.put('/payment-detail', data);
export const deletePaymentDetail = (data) => API.delete('/payment-detail', { data: data });

export const createOrderHistory = (data) => API.post('/order-history', data);
export const retrieveOrderHistories = () => API.get('/order-history');
export const updateOrderHistory = (data) => API.put('/order-history', data);
export const deleteOrderHistory = (data) => API.delete('/order-history', { data: data });

export const createRating = (data) => API.post('/rating', data);
export const retrieveRatings = () => API.get('/rating');
export const updateRating = (data) => API.put('/rating', data);
export const deleteRating = (data) => API.delete('/rating', { data: data });

export const createProductCategory = (data) => API.post('/product-category', data);
export const retrieveProductCategories = () => API.get('/product-category');
export const updateProductCategory = (data) => API.put('/product-category', data);
export const deleteProductCategory = (data) => API.delete('/product-category', { data: data });
