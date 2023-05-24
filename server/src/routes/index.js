/* eslint-disable import/extensions */
import express from 'express';
import { getProducts } from '../controllers/products/getProducts.js';
import { authRouter } from './auth.js';
import cartRouter from './cartRouter.js';
import { checkAuth } from '../middleware/index.js';
import { getProductController } from '../controllers/products/getProduct.js';

const router = express.Router();
router.use('/user', authRouter);
router.get("/product/:id", getProductController);
router.get('/products', getProducts);
router.use(checkAuth, cartRouter);

export default router;
