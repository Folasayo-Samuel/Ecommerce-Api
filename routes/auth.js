const authController = require("../controllers/auth");
const express = require("express");
const router = express.Router();

router.post("/", authController.create);

module.exports = router;
