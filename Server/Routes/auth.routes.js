const authComntroller = require('../Controllers/authComntroller');

const router = require('express').Router();

// Import controllers

router.post('/admin_login' , authComntroller.admin_login)

module.exports = router;