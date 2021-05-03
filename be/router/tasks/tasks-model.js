const mongoose = require("mongoose");

const TasksShema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("tasks", TasksShema);
