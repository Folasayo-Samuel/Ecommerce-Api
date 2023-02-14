const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 100,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  role: {
    type: String,
    enum: ["admin", "reseller", "user"],
    default: "user",
  },
});

UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, role: this.role },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
  return token;
};

const User = mongoose.model("User", UserSchema);

function validateUser(user) {
  const schema = {
    email: Joi.string().min(10).max(100).required().email(),
    password: Joi.string().min(5).max(1024).required(),
    username: Joi.string().min(5).max(50).required(),
  };

  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
