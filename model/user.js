const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  psswd: {
    type: String,
    require: true,
  },
});

const user = mongoose.model("users", userModel);

module.exports = user;
