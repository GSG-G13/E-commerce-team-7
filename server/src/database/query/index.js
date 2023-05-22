import addToCartQuery from "./cart/addToCart.js";
import { decrementCount, incrementCount } from './cart/count.js';
import { deleteFromCart } from './cart/deleteFromCart.js';
import getProductFromCartQuery from "./cart/getProductFromCart.js";
import getUserByEmail from "./userAuthentication/login.js";

export {
  incrementCount,
  decrementCount,
  addToCartQuery,
  getProductFromCartQuery,
  getUserByEmail,
  deleteFromCart,
};
