const express = require('express');
const router  = express.Router();
const userController = require('../controllers/user')
const passport = require('../config/auth')

// parsing form data
const bodyParser = require('body-parser');
const readForm = bodyParser.urlencoded({extended: false})


router.get('/user/signup', userController.register)

router.get('/user/login', userController.login)

router.post('/user/signup', readForm, userController.signup)

router.post('/user/login', readForm, passport.authenticate('local', 
{ successRedirect: '/',
failureRedirect: '/user/profile'}))

router.get('/user/logout', userController.logout)

router.get('/user/profile', userController.profile)

module.exports = router;

