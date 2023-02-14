const userController = require("../controllers/users");
const express = require("express");
const router = express.Router();

router.get("/me", userController.getUser);

router.post("/", userController.create);

module.exports = router;
