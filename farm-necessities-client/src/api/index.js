import axios from 'axios';
import { pastOrders, profile, cart,products,categories} from './dummy-data';

// eslint-disable-next-line no-unused-vars
const API = axios.create({ baseURL: 'http://localhost:5000' });

// export const fetchProducts = () => API.get('/products');
export const fetchProfile = () => profile;
export const fetchPastOrders = () => pastOrders;
export const fetchCart = () => cart;
export const fetchProducts = () => products;
export const fetchProductsByCategory = (activeCategory) => ({
  data: products.data.filter((product) => product.category_id === activeCategory),
});
export const fetchCategories = () => categories;