import express from "express";

const app = express();
const port : number = 3000;

app.get("/", (req, res) => {
  res.send("Hello World  from Express hello world");
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});