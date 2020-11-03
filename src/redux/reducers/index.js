import { combineReducers } from 'redux';
import userReducer from './userReducer';
import carReducer from './carReducer';

const rootReducer = combineReducers({
  userReducer,
  carReducer,
});

export default rootReducer;
