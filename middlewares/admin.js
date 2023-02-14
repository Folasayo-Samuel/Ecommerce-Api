const { User } = require("../models/user");

module.exports = function () {
  const user = User.findById(req.user._id);
  if (!user.role["admin"]) return res.status(403).send("Access denied!");

  next();
};
