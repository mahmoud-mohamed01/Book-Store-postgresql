import express from "express";
import{addProduct,getAddProductPage,getProducts,getEditProductPage,editProduct, deleteProduct} from"../Controllers/admin.js"

const router = express.Router();

//get page
router.get("/addProduct",getAddProductPage );
router.get("/products", getProducts);



//post route
router.post("/addProduct",addProduct);

router.get("/editProduct/:id",getEditProductPage);
router.post("/editProduct", editProduct);

router.post("/deleteProduct/:id", deleteProduct);




export default router;

