const productController = require("../controllers/products");
const express = require("express");
const router = express.Router();

// Get all products
router.get("/", productController.getAllProducts);

// Get a single product by id
router.get("/:id", productController.getProduct);

// Create a new product
router.post("/", productController.create);

// Update a product
router.patch("/:id", productController.updateProduct);

// Delete a product
router.delete("/:id", productController.deleteProduct);

module.exports = router;
