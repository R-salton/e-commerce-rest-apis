import { Request, Response } from "express";
import { db } from "../../db/index.js";
import { productsTable } from "../../db/productsSchema.js";
import { eq } from "drizzle-orm";



// * Get all products
export async function listProducts(req: Request, res: Response) {

    try {

        const products = await db.select().from(productsTable);
        res.status(200).json({products});
        
    } catch (error) {
        res.status(501).json({error:'Problem in Getting all products'})
    }

    res.send("The list of products");
};



// * Create a new product
export async function CreateProduct(req:Request,res:Response) {

    try {

        const [product] = await db.insert(productsTable).values(req.cleanBody).returning();

        res.status(201).json({message:"product created", product});
    } catch (error) {
        res.status(500).send({error:"Problem creating product"});
    }
};



// * Get a product by ID
export async function getProductById(req:Request,res:Response):Promise<void> {

    try {
        const {id} = req.params;
        const [product] = await db.select().from(productsTable).where(eq(productsTable.id,Number(id)));
        if (!product) {
            res.status(404).send({error:"Product not found"});
        }
        res.status(200).json({product});
        
    } catch (error) {
        res.status(500).send({error:"Problem getting product"});
        
    }

  
};

// * Update a product by ID

export async function updateProductById(req:Request,res:Response) {

    try {

        const id= Number(req.params.id);
        const updatedFields = req.cleanBody;
        const [product] = await db.update(productsTable).set(updatedFields).where(eq(productsTable.id,id)).returning();

        if(!product) {
            res.status(404).send({error:"Product not found"});
        }
        res.status(200).json({message:"product updated", product});
        
    } catch (error) {
        res.status(500).send({error:"Problem updating product"});
    }
 
}; 


// * Delete a product by ID
export async function deleteProductById(req:Request,res:Response) :Promise<void> {

    try {
        const id = Number(req.params.id);
        const [product] = await db.delete(productsTable).where(eq(productsTable.id,id)).returning();

        if (!product) {
            res.status(404).send({error:"Product not found"});
        }
        res.status(200).json({message:"product deleted", product});
           
    } catch (error) {
        res.status(500).send({error:"Problem deleting product"});
    }

};