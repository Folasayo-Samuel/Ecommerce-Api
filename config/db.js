const winston = require("winston");
const mongoose = require("mongoose");
require("dotenv").config();

module.exports = function () {
  mongoose.set("strictQuery", true);

  const dbLink = process.env.MONGO_URI;
  mongoose.connect(dbLink).then(() => {
    winston.info("Connected to database...");
  });
};
