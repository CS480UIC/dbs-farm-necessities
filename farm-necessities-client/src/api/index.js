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
export const fetchUsers = () => API.get('/user');
export const initializeDatabase = () => API.get('/initialize-database');
export const createAddress = (addressData) => API.post('/address', addressData);
export const retrieveAddresses = () => API.get('/address');
export const updateAddress = (addressData) => API.put('/address', addressData);
export const deleteAddress = (addressData) => API.delete('/address', { data: addressData });
