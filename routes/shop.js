import express from "express";
import{getProducts,getIndex,getCart,getOrders,getProduct,postCart, deleteFromCart, postOrder} from "../Controllers/shop.js"
const router = express.Router();

router.get("/",getIndex);
router.get("/products",getProducts);
router.get("/products/:id",getProduct)
router.get("/cart",getCart );
router.post("/cart", postCart);
router.post("/deletFromCart",deleteFromCart);
router.get("/orders", getOrders);

router.post("/post-order",postOrder);

router.get("/checkout" );



export default router;
