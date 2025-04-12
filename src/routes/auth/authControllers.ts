
import { promises } from "dns";
import { Request, Response } from "express";



export  async function registerUser(req:Request,res:Response):Promise<void> {

const userData = req.cleanBody;

    console.log(userData);
    res.send(200);
};

export const loginUser = (req:Request,res:Response)=>{
    res.send("Login route");
};