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
  id:{
    type:Decimal128,
  }
});

module.exports = mongoose.model("users", UsersShema);
