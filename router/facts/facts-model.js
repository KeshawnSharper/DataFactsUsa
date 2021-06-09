const { Int32 } = require("bson");
const mongoose = require("mongoose");

const FactsShema = mongoose.Schema({
  data:{
    type:Array,
    required:true
  },
  user_id: {
    type:Number,
    required: true
  },
  id:{
    type:String,
  }
});

module.exports = mongoose.model("facts", FactsShema);
