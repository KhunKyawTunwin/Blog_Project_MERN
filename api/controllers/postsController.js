const Post = require("../models/Post");

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
  try {
    const postid = req.params.id;
    const post = await Post.findById(postid);
    if (post.username === req.body.username) {
      try {
        await Post.findByIdAndDelete(postid);
        res.status(200).json(postid);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
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
