const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs")
const users = require("./users-model");


router.get("/", async (req, res) => {
  try {
    let allUsers = await users.find();
    res.json(allUsers);
  } catch (e) {
    res.json({ msg: e });
  }
});
router.post("/register", async (req, res) => {
    let user = req.body
    let hash = bcrypt.hashSync(user.password,13)
    user.password = hash
    await users.create(
        user
)
    try {
    res.json(user);
    } catch (e) {
      res.json({ msg: e });
    }
  });
  router.post("/", async (req, res) => {
    try {
    let user = req.body
    let hash = bcrypt.hashSync(user.password,13)
    user.password = hash
    res.json(user);
    } catch (e) {
      res.json({ msg: e });
    }
  });
module.exports = router;