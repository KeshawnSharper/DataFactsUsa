const express = require('express');
const router = express.Router();

const facts = require("./facts-model");


router.get("/", async (req, res) => {
  try {
    let allFacts = await facts.find();
    res.json(allFacts);
  } catch (e) {
    res.json({ msg: e });
  }
});
router.post("/", async (req, res) => {
  try {
    await facts.create(
      req.body
)
    res.json(req.body);
  } catch (e) {
    res.json({ msg: e });
  }
});
router.get("/user/:user_id", async (req, res) => {
  try {
    let userFacts = await facts.find({id:req.params.user_id});
    res.json(userFacts);
  } catch (e) {
    res.json({ msg: e });
  }
});
module.exports = router;