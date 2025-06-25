const { body, validationResult } = require('express-validator');

const validatePost = [
    body('title').notEmpty().withMessage('Title is required'),
    body('content').notEmpty().withMessage('Content is required'),
    body('category').notEmpty().withMessage('Category is required'),
];

const validateCategory = [
    body('name').notEmpty().withMessage('Category name is required'),
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validatePost,
    validateCategory,
    validate,
};