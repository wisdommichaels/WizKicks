const authController = require('../Controllers/authController');
const { verifyToken } = require('../Middleware/authMiddleware');

const router = require('express').Router();

// Import controllers

router.post('/admin_login' , authController.admin_login)

router.get('/get-user' , verifyToken, authController.get_user)

module.exports = router;