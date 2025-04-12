
import { Router } from "express";
import { loginUser, registerUser } from "./authControllers.js";
import  {validateData}  from "../../middlewares/validationMiddleware.js";
import { createUserSchema, loginUserSchema } from "../../db/usersSchema.js";


const router = Router();

//Register User
router.post("/register",validateData(createUserSchema), registerUser);



//Login User
router.post("/login",validateData(loginUserSchema),loginUser);

export default router;