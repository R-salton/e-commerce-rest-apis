import express from "express";
import productsRoutes from "./routes/products/index";

const app = express();
const port : number = 3000;

app.get("/", (req, res) => {
  res.send("Hello World  from Express hello world");
});




app.use("/products", productsRoutes);


app.listen(port, () => {
  console.log("Server is running on port 3000");
});