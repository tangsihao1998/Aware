import { combineReducers } from 'redux';
import AuthReducer from './Authentication';
import CartReducer from './cart-reducers';

export default combineReducers({
    AuthReducer,
    CartReducer,
});