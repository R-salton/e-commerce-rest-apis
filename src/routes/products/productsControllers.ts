import { Request, Response } from "express";
import { db } from "../../db";
import { productsTable } from "../../db/productsSchema";
import { eq } from "drizzle-orm";


export async function listProducts(req: Request, res: Response) {

    try {

        const products = await db.select().from(productsTable);
        res.status(200).json({products});
        
    } catch (error) {
        res.status(5001).json({error:'Problem in Getting all products'})
    }

    res.send("The list of products");
};



// * Create a new product
export async function CreateProduct(req:Request,res:Response) {

    try {
        const [product] = await db.insert(productsTable).values(req.body).returning();
        res.status(201).json({message:"product created", product});
    } catch (error) {
        res.status(500).send({error:"Problem creating product"});
    }
};



// * Get a product by ID
export async function getProductById(req:Request,res:Response) {

    try {
        const {id} = req.params;
        const [product] = await db.select().from(productsTable).where(eq(productsTable.id,Number(id)));
        if (!product) {
            return res.status(404).send({error:"Product not found"});
        }
        res.status(200).json({product});
        
    } catch (error) {
        res.status(500).send({error:"Problem getting product"});
        
    }

    res.send("product details");
};

export function updateProductById(req:Request,res:Response) {
    res.send("product updated");
};


export function deleteProductById(req:Request,res:Response) {
    res.send("product deleted");
};