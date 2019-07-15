const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')
const passport = require('passport');


// Parsing data
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended: false})

// #######################ROUTES###########################

// User sign in
router.get('/user/signup', userController.register);
router.get('/user/login', userController.login);

// user posts
router.post('/user/signup', urlEncoded, userController.signup);
router.post('/user/login', urlEncoded, passport.authenticate('local', { 
    successRedirect: '/profile',
    failureRedirect: '/user/login'
})
);

// profile page
router.get('/profile', userController.profile);

// logout for users
router.get('/logout', userController.logout);

module.exports = router;