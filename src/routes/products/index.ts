import { Router } from "express";
import { listProducts,CreateProduct,getProductById,updateProductById,deleteProductById } from "./productsControllers";

const router = Router();

//Product routs
router.get("/",listProducts );
router.get("/:id",getProductById);
router.post('/', CreateProduct); 
router.put("/:id",updateProductById);
router.delete("/:id",deleteProductById);


export default router;