const auth = require("../routes/auth");
const category = require("../routes/categories");
const order = require("../routes/orders");
const product = require("../routes/products");
const user = require("../routes/users");
const express = require("express");
const error = require("../middlewares/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/auth", auth);
  app.use("/api/category", category);
  app.use("/api/order", order);
  app.use("/api/product", product);
  app.use("/api/user", user);
  app.use(error);
};
