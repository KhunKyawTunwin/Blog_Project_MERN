const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const postsControlller = require("../controllers/postsController");

// Create Post
router.post("/", postsControlller.createPost);

// Update Post
router.put("/:id", postsControlller.postDelete);

// Delete Post
router.delete("/:id", postsControlller.postDelete);

// Get Post
router.get("/:id", postsControlller.getPost);

// Get All Posts
router.get("/", postsControlller.getPosts);

module.exports = router;
