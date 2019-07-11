const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

router.get('/user/signup', userController.register );

router.get('/user/login', userController.login)

// router.post('/user/signup', userController)

// router.post('/user/login', userController.login)

router.get('/profile', userController.profile)

// router.get('/logout', userController)

module.exports = router;
