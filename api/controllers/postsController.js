const Post = require("../models/Post");
const path = require("path");
const fs = require("fs");

// CreatePost
exports.createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const createdPost = await newPost.save();
    res.status(201).json(createdPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

// UpdatePost
exports.postUpdate = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// DeletePost
exports.postDelete = async (req, res) => {
  // console.log(post.photo);
  try {
    const { postId } = req.params;
    const { username } = req.body;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    if (post.username !== username) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    // Delete the associated image file
    if (post.photo) {
      const imagePath = path.join(__dirname, "../images", post.photo);
      fs.unlinkSync(imagePath);
    }

    await Post.findByIdAndDelete(postId);

    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// GetPost
exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GetAllPosts
exports.getPosts = async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;

  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};
