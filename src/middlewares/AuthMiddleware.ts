import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";




// Verify token middleware
export async function verifyToken(req:Request,res:Response,next:NextFunction) {

    const token =  req.headers.authorization;
    if(!token) {
        res.status(401).json({error:"Access denied"});
        return;
    }

    try {

        const decoded = await jwt.verify(token, process.env.JWT_SECRET as string);
        
        if (typeof decoded !== "object" || !("userId" in decoded)) { 
            res.status(401).json({error:"Access denied"});
            return;
        }
        req.userId = decoded.userId;
        req.role = decoded.role;
        next();
        
    } catch (error) {
        res.status(401).json({error:"Access denied"});
        return;
    }
}



// verify seller
export async function verifySeller(req:Request,res:Response,next:NextFunction) {

    const role = req.role;
    if(role !== "seller") {
        res.status(401).json({error:"Access denied"});
        return;
    }
    next();
    
        
   
}