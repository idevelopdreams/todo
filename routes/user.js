const express = require('express');
const router  = express.Router();
const userController = require('../controllers/user')
const passport = require('../config/passport')
const isAuthenticated = require('../config/middleware/isAuthenticated')
// parsing form data
const bodyParser = require('body-parser');
const readForm = bodyParser.urlencoded({extended: false})

router.get( '/user/signup', userController.register );

router.get('/user/login', userController.userLogin)

router.post('/user/signup', readForm, userController.signup)

router.post('/user/login', readForm, passport.authenticate('local', 
    {successRedirect: '/profile',
    failureRedirect: '/user/login' 
    })
);

router.get('/profile', isAuthenticated, userController.userProfile)

router.get('/logout', userController.userLogout)

module.exports = router;

