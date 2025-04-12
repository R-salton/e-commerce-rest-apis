import { Router } from "express";
import { listProducts,CreateProduct,getProductById,updateProductById,deleteProductById } from "./productsControllers";
import { validateData } from "../../middlewares/validationMiddleware";
import { verifySeller, verifyToken } from "../../middlewares/AuthMiddleware";
import { CreateProductSchema, updateProductSchema} from "../../db/productsSchema";


const router = Router();

//Product routs
router.get("/",listProducts );
router.get("/:id",getProductById);
router.post('/',verifyToken,verifySeller,validateData(CreateProductSchema), CreateProduct); 
router.put("/:id",verifyToken,verifySeller,validateData(updateProductSchema),updateProductById);
router.delete("/:id",verifyToken,verifySeller,deleteProductById);


export default router;