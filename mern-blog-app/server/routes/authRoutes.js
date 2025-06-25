const express = require('express');
const { register, login } = require('../controllers/authController');
const { validateRegistration, validateLogin } = require('../middleware/validate');

const router = express.Router();

// Register route
router.post('/register', validateRegistration, register);

// Login route
router.post('/login', validateLogin, login);

module.exports = router;