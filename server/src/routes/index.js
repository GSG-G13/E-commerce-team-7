import express from 'express';
import getProducts from "../controllers/products/getProducts.js";
import login from "../controllers/login/login.js";
import { authRouter } from './auth.js';
import {addToCartControllers, deleteProduct, getAllProductsFromCartController} from '../controllers/index.js';
import { checkAuth } from '../middleware/checkAuth.js';
import { isLogged } from '../middleware/isLogged.js';

const router = express.Router();

router.use('/user', isLogged, authRouter);
router.get("/products", getProducts);
router.post("/login",isLogged, login);
router.post('/add-to-cart', addToCartControllers);
router.delete('/product/:product_id', checkAuth,deleteProduct)
router.post('/get-all-product', getAllProductsFromCartController)

export default router;