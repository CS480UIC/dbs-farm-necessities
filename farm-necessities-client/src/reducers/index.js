import { combineReducers } from 'redux';
import { pastOrders, profile } from './profile-reducers';

export default combineReducers({
  profile,
  pastOrders,
});
