const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct
} = require("../controllers/productController");

const productRoutes = express.Router();

productRoutes.post("/", createProduct);
productRoutes.get("/", getAllProducts);
productRoutes.get("/:id", getProduct);
productRoutes.put("/:id", updateProduct);

module.exports = productRoutes;
