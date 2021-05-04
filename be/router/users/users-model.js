const mongoose = require("mongoose");

const UsersShema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    maxlength:255,
    minlength:0
  },
});

module.exports = mongoose.model("users", UsersShema);
