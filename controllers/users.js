const auth = require("../middlewares/auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/user");
const mongoose = require("mongoose");
const _ = require("lodash");

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) return res.status(404).send("User not found!");
    res.status(201).send(user);
  } catch (ex) {
    res.status(500).send(ex.message);
  }
};

exports.create = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({email: req.body.email});
    if(user) return res.status(400).send("User already exist!");

    user = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthtoken();
    res.header("x-auth-token", token).send(user, ["_id", "name", "email"])
  } catch (err) {
    res.status(500).send(err.message);
  }
};
