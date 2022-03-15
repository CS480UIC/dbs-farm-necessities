import { combineReducers } from 'redux';
import { pastOrders, profile } from './profile-reducers';
import { cart, cartLoaded } from "./cart-reducer";
import { categories, products } from './shop-reducer';

export default combineReducers({
  products,
  categories,
  profile,
  pastOrders,
  cart,
  cartLoaded
});
