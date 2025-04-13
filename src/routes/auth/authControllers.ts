
import { promises } from "dns";
import e, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { usersTable } from "../../db/usersSchema.js";
import { db } from "../../db/index.js";
import { eq } from "drizzle-orm"; 
import jwt from "jsonwebtoken";



//Register User
export  async function registerUser(req:Request,res:Response):Promise<void> {

const userData = req.cleanBody;
userData.password = await bcrypt.hash(userData.password, 10);
console.log(userData);

try {

    const existingUser = await db.select().from(usersTable).where(eq(usersTable.email,userData.email));
if (existingUser){
    res.status(400).json({error:"User already exists"});

} else{

    const [user] = await db.insert(usersTable).values(userData).returning();
   
    res.status(201).json({message:"User created", user});
    res.status(201).json({message:"User created", user});
}
    
} catch (error) {
    res.status(500).json({error:"Problem creating user: "+error});  
}
};




//Login User
export async function loginUser(req:Request,res:Response):Promise<void> {

    try {

        const {email,password} = req.cleanBody;
        const [user] = await db.select().from(usersTable).where(eq(usersTable.email,email));


        if (!user) {
            res.status(404).json({error:"Authentication failed"}); 
        } else{

            
                // Create JWT token
                const isPasswordCorrect = await bcrypt.compare(password,user.password);

                if (!isPasswordCorrect) {
                    res.status(401).json({error:"Authentication failed"});
                    return;
                } else{

                    delete (user as { password?: string }).password; 
                    const token =await jwt.sign({userId: user.id,role: user.role},process.env.JWT_SECRET!,{expiresIn:"1h"});
                    res.status(200).json({message:"User logged in", user,token});
                }
                
    
            
        }
        
    } catch (error) {
        res.status(500).json({error:"Problem logging in"});
        
    }
    
};