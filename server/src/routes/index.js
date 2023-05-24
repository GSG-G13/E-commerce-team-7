/* eslint-disable import/extensions */
import express from 'express';
import { getProducts } from '../controllers/products/getProducts.js';
import { authRouter } from './auth.js';
import cartRouter from './cartRouter.js';
import { checkAuth, isLogged } from '../middleware/index.js';
import { logoutController } from '../controllers/index.js';

const router = express.Router();
router.get('/products', getProducts);
router.get("/products", getProducts);
router.get('/user/logout', logoutController);
router.use('/user', isLogged, authRouter);
router.use(checkAuth, cartRouter);

export default router;
