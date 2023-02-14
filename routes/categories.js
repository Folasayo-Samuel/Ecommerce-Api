const categoryController = require('../controllers/categories');
const express = require("express");
const router = express.Router();

// Get all categories
router.get("/", categoryController.getAllCategories);

// Get a single category by id
router.get("/:id", categoryController.getCategory);

// Create a new category
router.post("/", categoryController.createNewCategory);


// Update a category
router.patch("/:id", categoryController.updateCategory);

// Delete a category
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
