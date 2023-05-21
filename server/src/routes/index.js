import express from 'express';
import { authRouter } from './auth.js';
import getProducts from "../controllers/products/getProducts.js";
import login from "../controllers/login/login.js";
import { addToCartControllers, getAllProductsFromCartController } from '../controllers/index.js';

const router = express.Router();

router.use('/user', authRouter);
router.get("/products", getProducts);
router.post("/login", login);
router.post('/add-to-cart', addToCartControllers);
router.post('/get-all-product', getAllProductsFromCartController)

export default router;