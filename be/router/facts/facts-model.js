const mongoose = require("mongoose");

const TasksShema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  user_id: {
    type: String
  }
});

module.exports = mongoose.model("tasks", TasksShema);
