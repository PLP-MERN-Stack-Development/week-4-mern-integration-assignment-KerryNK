const express = require('express');
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');

const router = express.Router();

// @route   GET /api/posts
// @desc    Get all blog posts
router.get('/', getAllPosts);

// @route   GET /api/posts/:id
// @desc    Get a specific blog post
router.get('/:id', getPostById);

// @route   POST /api/posts
// @desc    Create a new blog post
router.post('/', createPost);

// @route   PUT /api/posts/:id
// @desc    Update an existing blog post
router.put('/:id', updatePost);

// @route   DELETE /api/posts/:id
// @desc    Delete a blog post
router.delete('/:id', deletePost);

module.exports = router;