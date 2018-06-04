import {combineReducers} from 'redux';
import user from './user-reducer';
import login from './login-reducer';
const MainReducer=combineReducers({
  user,
  login
});
export default MainReducer;