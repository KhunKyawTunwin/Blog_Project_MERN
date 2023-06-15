const bcrypt = require("bcrypt");
const User = require("../models/User");

// UserRegister
exports.userRegister = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if ((!username || !email, !password)) {
      res.status(400).json({ message: error.message });
    }

    if (!/^[a-zA-Z ]*$/.test(username)) {
      res.status(400).json({
        status: "FAILED",
        message: "Invalid name entered",
      });
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      res.status(400).json({
        status: "FAILED",
        message: "Invalid email entered",
      });
    }

    if (password.length < 8) {
      res.status(400).json({
        status: "FAILED",
        message: "Password is too short!",
      });
    }

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

// userLogin
exports.userLogin = async (req, res) => {
  const { username } = req.body;

  try {
    const user = await User.findOne({ username: username });

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
};
