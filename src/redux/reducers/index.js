import { combineReducers } from "redux";
import shoppingBag from "./shopping-bag";
import wishList from "./wish-list";
import language from "./language";
import search from "./search";
import authPopUp from "./auth-pop-up";
import menu from "./menu";
import root from "./root";
import product from "./product";

export default combineReducers({ shoppingBag, wishList, language, search, authPopUp, menu, root, product });