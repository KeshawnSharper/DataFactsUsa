const express = require('express');

const router = express.Router();

const tasks = require("./data-model");


router.get("/", async (req, res) => {
  try {
    let task = await tasks.find();
    res.json(task);
  } catch (e) {
    res.json({ msg: e });
  }
});
module.exports = router;