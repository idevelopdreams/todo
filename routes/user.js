const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')
const isAuth = require('../config/middleware/isAuthenticated')


router.get('/user/signup', userController.register );

router.get('/user/login', userController.userLogin)

router.post('/user/signup', userController.signup);

router.post('/user/login', userController.userSignin)

router.get('/login/facebook', userController.fblogin)

router.get('/return', userController.fbcallback );

router.get('/profile', isAuth, userController.userProfile)

router.get('/logout', userController.userLogout)

module.exports = router;