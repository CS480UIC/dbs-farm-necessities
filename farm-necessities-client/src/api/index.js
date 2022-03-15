import axios from 'axios';
import { pastOrders, profile, cart} from './dummy-data';

// eslint-disable-next-line no-unused-vars
const API = axios.create({ baseURL: 'http://localhost:5000' });

// export const fetchProducts = () => API.get('/products');
export const fetchProfile = () => profile;
export const fetchPastOrders = () => pastOrders;
export const fetchCart = () => cart;