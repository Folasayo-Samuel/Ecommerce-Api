const orderController = require("../controllers/orders");
const express = require("express");
const router = express.Router();

// Get all orders
router.get("/", orderController.getAllOrders);

// Get a single order by id
router.get("/:id", orderController.getOrder);

// Create a new order
router.post("/", orderController.create);

// Update an order
router.patch("/:id", orderController.updateOrder);

// Delete an order
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
