import express from 'express';
import getProducts from "../controllers/products/getProducts.js";
import login from "../controllers/login/login.js";
import { authRouter } from './auth.js';
import {addToCartControllers, deleteProduct, getAllProductsFromCartController} from '../controllers/index.js';
import { checkAuth } from '../middleware/checkAuth.js';

const router = express.Router();

router.use('/user', authRouter);
router.get("/products", getProducts);
router.post("/login", login);
router.post('/add-to-cart', addToCartControllers);
router.delete('/product/:product_id', deleteProduct)
router.post('/get-all-product', getAllProductsFromCartController)

export default router;