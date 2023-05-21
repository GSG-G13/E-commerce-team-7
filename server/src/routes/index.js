import express from 'express';

import {addToCartControllers, getAllProductsFromCartController} from '../controllers/index.js';

const router = express.Router();

router.post('/add-to-cart', addToCartControllers);
router.post('/get-all-product',getAllProductsFromCartController )

export default router;
