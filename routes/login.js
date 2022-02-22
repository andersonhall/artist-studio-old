const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validateLogin = require('../middleware/validateLogin');

router.route('/').post(validateLogin, authController.handleLogin);

module.exports = router;
