const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs")
const users = require("./users-model");
const jwt = require("jsonwebtoken")


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
  router.post("/login", async (req, res) => {
    let user = req.body
    let login = await users.findOne({
      username:user.username}).exec()

    try {
      if (bcrypt.compareSync(user.password,login.password)){
      res.json({ username:user.username,id:user._id,token:jwt.sign({
        userid:user._id,
        username:user.username
      },"secret",{
        expiresIn:"1d"
      }) })
      }
    } catch (e) {
      res.json({ msg: e });
    }
  });
module.exports = router;