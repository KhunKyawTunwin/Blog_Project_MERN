const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");

// Register
router.post("/register");

// Login
router.post("/login", async (req, res) => {
  const { username } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json(`${username} Wrong credentials!`);
    }

    const validated = await bcrypt.compare(req.body.password, user.password);

    if (!validated) {
      return res.status(400).json(`${username} Wrong credentials!`);
    }

    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
