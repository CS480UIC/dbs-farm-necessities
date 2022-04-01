import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const initializeDatabase = () => API.get('/initialize-database');
