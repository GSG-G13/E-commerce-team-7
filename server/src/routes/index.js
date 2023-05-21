import express from "express";
import Hello from "../controllers/index.js";
import getProducts from "../controllers/products/getProducts.js";
import login from "../controllers/login/login.js";

const router = express.Router();

router.get("/", Hello);
router.get("/products", getProducts);
router.post("/login", login);

export default router;
