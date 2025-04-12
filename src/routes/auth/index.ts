
import { Router } from "express";
import { loginUser, registerUser } from "./authControllers";
import  {validateData}  from "../../middlewares/validationMiddleware";
import { createUserSchema, loginUserSchema } from "../../db/usersSchema";


const router = Router();

//Register User
router.post("/register",validateData(createUserSchema), registerUser);



//Login User
router.post("/login",validateData(loginUserSchema),loginUser);

export default router;