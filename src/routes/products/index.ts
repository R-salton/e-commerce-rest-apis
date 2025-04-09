import { Router } from "express";
import express from "express";

const router = Router();

//Product routs
router.get("/products", (req, res) => {

    res.send("The list of products");
})

router.post('/products', (req, res) => {
    res.send("product added");
});


router.get("/products/:id",(req, res) => {
    res.send("product details");
});


export default router;