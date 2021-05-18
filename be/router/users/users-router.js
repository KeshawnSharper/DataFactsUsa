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
    
    if (!user.username || !user.password) {
      return res.status(400).json("Please add username and password fields");
    }
    if (typeof user.username !== "string" || typeof user.password !== "string" ) {
      return res.status(400).json("Username or password cant be integers");
    }
    if(await users.findOne({
      username:user.username})
    ){
      return res.status(402).json("User already exsist");
    }

    let hash = bcrypt.hashSync(user.password,13)
    user.password = hash
    user.id = await users.countDocuments() + 1

    await users.create(
        user
)
    try {
    res.json(user);
    } catch (e) {
      console.log("failed")
      res.json({ msg: e });
    }
  });
  router.post("/login", async (req, res) => {
    let user = req.body
    let login = await users.findOne({
      username:user.username}).exec()

    try {
      if (bcrypt.compareSync(user.password,login.password)){
      res.json({ id:login.id,username:user.username,token:jwt.sign({
        id:login.id,
        username:user.username
      },"secret",{
        expiresIn:"1d"
      })})
      }
    } catch (e) {
      res.json({ msg: e });
    }
  });
module.exports = router;