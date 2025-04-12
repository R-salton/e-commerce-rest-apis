import express,{json,urlencoded} from "express";
import productsRoutes from "./routes/products/index";
import authRoutes from "./routes/auth/index";

const app = express();
const port : number = 3000;

app.use(json());
app.use(urlencoded({ extended: true })); // Middleware to parse URL-encoded request body
app.use(express.static("public")); // Middleware to serve static files from the "public" directory


app.get("/", (req, res) => {
  res.send("Hello World  from Express hello world");
});




app.use("/products", productsRoutes);
app.use("/auth",authRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`); 
}); 