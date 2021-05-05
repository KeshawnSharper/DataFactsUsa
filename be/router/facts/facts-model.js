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
    type: String,
    required: true
  }
});

module.exports = mongoose.model("facts", FactsShema);
