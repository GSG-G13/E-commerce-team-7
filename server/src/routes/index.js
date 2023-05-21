import express from 'express';

import {addToCartControllers, deleteProduct, getAllProductsFromCartController} from '../controllers/index.js';

const router = express.Router();

router.post('/add-to-cart', addToCartControllers);
router.post('/get-all-product',getAllProductsFromCartController )
router.delete('/product/:product_id', deleteProduct)

export default router;
