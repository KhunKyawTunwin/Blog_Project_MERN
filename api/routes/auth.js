const router = require("express").Router();
const authController = require("../controllers/authController");

// Register
router.post("/register", authController.userRegister);

// Login
router.post("/login", authController.userLogin);

module.exports = router;
