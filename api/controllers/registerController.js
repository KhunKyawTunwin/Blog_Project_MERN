const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.userRegister = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPass,
    });

    const userData = await newUser.save();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
};
