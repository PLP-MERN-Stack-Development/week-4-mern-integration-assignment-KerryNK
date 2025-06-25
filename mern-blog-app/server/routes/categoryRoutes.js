const express = require('express');
const { getCategories, createCategory } = require('../controllers/categoryController');
const { validateCategory } = require('../middleware/validate');

const router = express.Router();

// @route   GET /api/categories
// @desc    Get all categories
// @access  Public
router.get('/', getCategories);

// @route   POST /api/categories
// @desc    Create a new category
// @access  Public
router.post('/', validateCategory, createCategory);

module.exports = router;