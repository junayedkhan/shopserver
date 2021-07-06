import express, { Router } from "express"
import { create_product, get_product, get_category, getProductsInCategory, get_product_details } from "../controler/product_controler.js"
import { create_blog, get_blog } from "../controler/blog_controler.js";

const router = express.Router();

router.post("/products", create_product)
router.get("/products", get_product)
router.get("/products/category", get_category)
router.get("/products/category/:category", getProductsInCategory);
router.get("/products/:_id", get_product_details)
router.post("/blog", create_blog)
router.get("/blog", get_blog)

export default router;