const express = require('express');
const router = express.Router();

const facts = require("./facts-model");


router.get("/", async (req, res) => {
  try {
    res.json(await facts.find());
  } catch (e) {
    res.json({ msg: e });
  }
});
router.post("/", async (req, res) => {
  if (!req.body.user_id)  {
    res.status(500).json({message:"Please add a user_id property"})
  }
  else if (!req.body.id)  {
     res.status(500).json({message:"Please add an id property"})
  }
  else{
  try {
    await facts.create(
      req.body
)
    res.json(req.body);
  } catch (e) {
    res.json({ msg: e });
  }
}
});
router.get("/user/:user_id", async (req, res) => {
  try {
    res.json(await facts.find({id:req.params.user_id}));
  } catch (e) {
    res.json({ msg: e });
  }
});
module.exports = router;