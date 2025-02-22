const authController = require('../Controllers/authController');

const router = require('express').Router();

// Import controllers

router.post('/admin_login' , authController.admin_login)

module.exports = router;