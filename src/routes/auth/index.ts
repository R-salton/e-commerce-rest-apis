
import { Router } from "express";
import { loginUser, registerUser } from "./authControllers";
import  {validateData}  from "../../middlewares/validationMiddleware";
import { createUserSchema } from "../../db/usersSchema";


const router = Router();

//Register User
router.post("/register",validateData(createUserSchema), registerUser);



//Login User
router.post("/login",loginUser);

export default router;