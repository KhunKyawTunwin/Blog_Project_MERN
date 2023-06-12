const router = require("express").Router();
const usersControl = require("../controllers/usersController");

// Update
router.put("/:id", usersControl.updateUser);

// Delete
router.delete("/:id", usersControl.deletUser);

// Get User
router.get("/:id", usersControl.getUser);

module.exports = router;
