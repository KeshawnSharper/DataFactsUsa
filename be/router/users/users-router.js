const express = require('express');
const router = express.Router();
const users = require("./users-model");


router.get("/", async (req, res) => {
  try {
    let allUsers = await users.find();
    res.json(allUsers);
  } catch (e) {
    res.json({ msg: e });
  }
});
module.exports = router;