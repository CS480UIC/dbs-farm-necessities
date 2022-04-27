import { combineReducers } from 'redux';
import auth from './authReducer';
import users from './usersReducer';
import addresses from './addressReducer';

export default combineReducers({
  auth,
  users,
  addresses,
});
