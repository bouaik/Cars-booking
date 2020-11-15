import { combineReducers } from 'redux';
import userReducer from './userReducer';
import carReducer from './carReducer';
import appointementReducer from './appointementReducer';

const rootReducer = combineReducers({
  userReducer,
  carReducer,
  appointementReducer,
});

export default rootReducer;
