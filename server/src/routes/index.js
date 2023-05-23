/* eslint-disable import/extensions */
import express from 'express';
import { getProducts } from '../controllers/products/getProducts.js';
import { authRouter } from './auth.js';
import cartRouter from './cartRouter.js';
import { checkAuth, isLogged } from '../middleware/index.js';
import { getProductController } from '../controllers/products/getProduct.js';

const router = express.Router();
router.use('/user', isLogged, authRouter);
router.use(checkAuth, cartRouter);
router.get('/products', getProducts);
router.get("/product/:id", getProductController);
export default router;
