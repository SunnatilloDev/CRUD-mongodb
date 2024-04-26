import { Router } from "express";
import {
  deleteProduct,
  getProductById,
  getProducts,
  postProducts,
  searchProduct,
  updateProduct,
} from "../controllers/productController.js";

let productsRouter = Router();

productsRouter.get("/", getProducts);
productsRouter.get("/search", searchProduct);
productsRouter.post("/", postProducts);
productsRouter.get("/:id", getProductById);
productsRouter.delete("/:id", deleteProduct);
productsRouter.put("/:id", updateProduct);

export default productsRouter;
