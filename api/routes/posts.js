const router = require("express").Router();
const postsControlller = require("../controllers/postsController");

// Create Post
router.post("/", postsControlller.createPost);

// Update Post
router.put("/:id", postsControlller.postUpdate);

// Delete Post
router.delete("/:id", postsControlller.postDelete);

// Get Post
router.get("/:id", postsControlller.getPost);

// Get All Posts
router.get("/", postsControlller.getPosts);

module.exports = router;
