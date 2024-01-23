import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const getProducts = async (res, req) => {
  const products = await Product.find({});
  res.json(products);
};

const getProductsById = async (res, req) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
};

export { getProductsById, getProducts };
