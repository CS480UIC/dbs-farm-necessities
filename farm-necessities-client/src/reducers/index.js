import { combineReducers } from 'redux';
import { pastOrders, profile } from './profile-reducers';
import { cart, cartLoaded } from "./cart-reducer";

export default combineReducers({
  profile,
  pastOrders,
  cart,
  cartLoaded
});
