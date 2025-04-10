import { Request, Response } from "express";



export function listProducts(req: Request, res: Response) {

    res.send("The list of products");
};

export function CreateProduct(req:Request,res:Response) {
    
    const product = req.body;
    res.send({"meassage":"product created", product});
};

export function getProductById(req:Request,res:Response) {

    res.send("product details");
};

export function updateProductById(req:Request,res:Response) {
    res.send("product updated");
};


export function deleteProductById(req:Request,res:Response) {
    res.send("product deleted");
};