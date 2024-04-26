import Product from "../models/productScheme.js";

//! Get Products
let getProducts = async (req, res, next) => {
  try {
    let products = await Product.find();

    res.send({
      success: true,
      message: "Products were found successfully",
      products,
    });
  } catch (error) {
    next(new Error(error.message));
  }
};
//! Get Product by id
let getProductById = async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      next(new Error("Product not found"));
    }
    res.send({
      success: true,
      message: "Product was found successfully",
      product,
    });
  } catch (error) {
    next(new Error(error.message));
  }
};
//! Post Product
let postProducts = async (req, res, next) => {
  try {
    let product = new Product(req.body);
    await product.save();
    res.send({
      success: true,
      message: "Products was created successfully",
      product,
    });
  } catch (error) {
    next(new Error(error.message));
  }
};
//! Delete Product
let deleteProduct = async (req, res, next) => {
  try {
    let product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      next(new Error("Product not found"));
    }
    res.send({
      success: true,
      message: "Product was deleted successfully",
    });
  } catch (error) {
    next(new Error(error.message));
  }
};
//! Update Product
let updateProduct = async (req, res, next) => {
  try {
    let product = await Product.findByIdAndUpdate(req.params.id, req.body);
    if (!product) {
      next(new Error("Product not found"));
    }
    res.send({
      success: true,
      message: "Product was updated successfully",
      product,
    });
  } catch (error) {
    next(new Error(error.message));
  }
};
//! Search Product
let searchProduct = async (req, res, next) => {
  try {
    let productName = req.query.q;
    let product = await Product.find({
      name: { $regex: productName, $options: "i" },
    });
    console.log(productName);
    if (!product || product.length === 0) {
      throw new Error("Product not found");
    }

    res.send({
      success: true,
      message: "Product was found successfully",
      product,
    });
  } catch (error) {
    next(error.message);
  }
};

export {
  getProducts,
  postProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  searchProduct,
};
