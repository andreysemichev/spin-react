import { combineReducers } from "redux";
import shoppingBag from "./shopping-bag";
import wishList from "./wish-list";
import language from "./language";
import search from "./search";
import signIn from "./sign-in";
import menu from "./menu";

export default combineReducers({ shoppingBag, wishList, language, search, signIn, menu });