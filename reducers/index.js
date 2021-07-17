import { combineReducers } from "redux";
import Item from "./item";
import Cart from './cart';
import login from './login';
import review from './review';
import payment from './payment';
import order from './order';

export default combineReducers({
    Item,
    Cart,
    login,
    review,
    payment,
    order,
   
})