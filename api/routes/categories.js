const router = require("express").Router();
const Category = require("../models/Category");
const cateController = require("../controllers/categoriesController");

// PostCategories
router.post("/", cateController.postCategories);

// Getcategory
router.get("/", cateController.getCategories);

module.exports = router;
