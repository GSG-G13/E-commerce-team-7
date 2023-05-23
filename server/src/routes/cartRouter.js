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
cartRouter.post('/add-to-ccrt', addToCartControllers);
cartRouter.get('/decrement/:productId', decrement);
cartRouter.get('/increment/:productId', increment);

export default cartRouter;
