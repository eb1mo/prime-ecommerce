const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProduct
} = require("../controllers/productController");

const productRoutes = express.Router();

productRoutes.post("/", createProduct);
productRoutes.get("/", getAllProducts);
productRoutes.get("/:id", getProduct);

module.exports = productRoutes;
