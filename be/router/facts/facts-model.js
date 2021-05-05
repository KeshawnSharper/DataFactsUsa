const { Int32 } = require("bson");
const mongoose = require("mongoose");

const FactsShema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  user_id: {
    type:Number,
    required: true
  },
  id:{
    type:Number,
  }
});

module.exports = mongoose.model("facts", FactsShema);
