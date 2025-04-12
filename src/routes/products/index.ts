import { Router } from "express";
import { listProducts,CreateProduct,getProductById,updateProductById,deleteProductById } from "./productsControllers";
import { validateData } from "../../middlewares/validationMiddleware";
import { CreateProductSchema, updateProductSchema} from "../../db/productsSchema";

const router = Router();

//Product routs
router.get("/",listProducts );
router.get("/:id",getProductById);
router.post('/',validateData(CreateProductSchema), CreateProduct); 
router.put("/:id",validateData(updateProductSchema),updateProductById);
router.delete("/:id",deleteProductById);


export default router;