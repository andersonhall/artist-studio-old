const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const validateRegistration = require('../middleware/validateRegistration');

router.route('/').post(validateRegistration, registerController.handleNewTeacher);

module.exports = router;
