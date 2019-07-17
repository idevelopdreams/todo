const express = require('express');
const router  = express.Router();
const userController = require('../controllers/user')
const isAuth = require('../config/middleware/isAuthenicated')

router.get('/user/signup', userController.register)

router.get('/user/login', userController.login)

router.post('/user/signup', userController.signup)

router.post('/user/login', userController.userSignin)

router.get('/logout', userController.logout)

router.get('/user/profile', isAuth, userController.profile)

module.exports = router;

