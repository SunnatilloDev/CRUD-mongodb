import express from "express";
import productsRouter from "./routes/productsRoute.js";
import { configDotenv } from "dotenv";
import "./config/connectToDB.js";
configDotenv();
let app = express();
let PORT = process.env.PORT || 8080;
app.use(express.json());

app.use("/products", productsRouter);

app.use((err, req, res, next) => {
  res.status(500).send({
    success: false,
    message: err.message,
  });
  console.log(err.message);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
