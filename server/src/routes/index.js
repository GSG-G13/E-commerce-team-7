import express from 'express';
import getProducts from '../controllers/products/getProducts.js';
import authRouter from './auth.js';
import { checkAuth } from '../middleware/checkAuth.js';
import { isLogged } from '../middleware/isLogged.js';
import cartRouter from './cartRouter.js';

const router = express.Router();
router.use('/user', isLogged, authRouter);
router.use(checkAuth, cartRouter);
router.get('/products', getProducts);

export default router;
