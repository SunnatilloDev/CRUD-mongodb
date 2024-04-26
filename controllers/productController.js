import Product from "../models/productScheme.js";

//! Get Products
let getProducts = async (req, res) => {
  try {
    let products = await Product.find();
    res.send({
      success: true,
      message: "Products were found successfully",
      products,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
//! Get Product by id
let getProductById = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }
    res.send({
      success: true,
      message: "Product was found successfully",
      product,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
//! Post Product
let postProducts = async (req, res) => {
  try {
    let product = new Product(req.body);
    await product.save();
    res.send({
      success: true,
      message: "Products was created successfully",
      product,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
//! Delete Product
let deleteProduct = async (req, res) => {
  try {
    let product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }
    res.send({
      success: true,
      message: "Product was deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
//! Update Product
let updateProduct = async (req, res) => {
  try {
    let product = await Product.findByIdAndUpdate(req.params.id, req.body);
    if (!product) {
      return res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }
    res.send({
      success: true,
      message: "Product was updated successfully",
      product,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
//! Search Product
let searchProduct = async (req, res) => {
  try {
    let productName = req.query.q;
    let product = await Product.find({
      name: { $regex: productName, $options: "i" },
    });
    console.log(productName);
    if (!product) {
      return res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }

    res.send({
      success: true,
      message: "Product was found successfully",
      product,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
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
