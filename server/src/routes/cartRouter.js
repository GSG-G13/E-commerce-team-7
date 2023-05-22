import express from 'express';
import {
  addToCartControllers,
  decrement,
  deleteProduct,
  getAllProductsFromCart,
  increment,
} from '../controllers/index.js';

const cartRouter = express.Router();
cartRouter.get('/get-all-product', getAllProductsFromCart);
cartRouter.delete('/product/:productId', deleteProduct);
cartRouter.post('/add-to-cart', addToCartControllers);
cartRouter.get('/decrement/:product_id', decrement);
cartRouter.get('/increment/:product_id', increment);


export default cartRouter;
