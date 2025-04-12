import { Router } from "express";
import { listProducts,CreateProduct,getProductById,updateProductById,deleteProductById } from "./productsControllers.js";
import { validateData } from "../../middlewares/validationMiddleware.js";
import { verifySeller, verifyToken } from "../../middlewares/AuthMiddleware.js";
import { CreateProductSchema, updateProductSchema} from "../../db/productsSchema.js";


const router = Router();

//Product routs
router.get("/",listProducts );
router.get("/:id",getProductById);
router.post('/',verifyToken,verifySeller,validateData(CreateProductSchema), CreateProduct); 
router.put("/:id",verifyToken,verifySeller,validateData(updateProductSchema),updateProductById);
router.delete("/:id",verifyToken,verifySeller,deleteProductById);


export default router;