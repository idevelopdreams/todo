const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

// #######################ROUTES###########################

// User sign in
router.get('/user/signup', userController.register);
router.get('/user/login', userController.login);

// user posts
router.post('/user/signup', userController.userPost);
router.post('/user/login', userController.userPost);

// profile page
router.get('/profile', userController.profile);

// logout for users
router.get('/logout', userController.logout);

module.exports = router;