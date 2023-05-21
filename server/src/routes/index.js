
import express from "express";
import getProducts from "../controllers/products/getProducts.js";
import login from "../controllers/login/login.js";
import {addToCartControllers, deleteProduct, getAllProductsFromCartController} from '../controllers/index.js';

const router = express.Router();

router.get("/products", getProducts);
router.post("/login", login);

router.post('/add-to-cart', addToCartControllers);
router.post('/get-all-product',getAllProductsFromCartController )
router.delete('/product/:product_id', deleteProduct)

export default router;