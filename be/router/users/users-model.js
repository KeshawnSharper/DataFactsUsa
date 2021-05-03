const mongoose = require("mongoose");

const UsersShema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("users", UsersShema);
