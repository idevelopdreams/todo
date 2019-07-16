const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')
const passport =require('../config/passport');
const isAuth = require('../config/middleware/isAuthenticated')


const bodyParser = require('body-parser');
const readform = bodyParser.urlencoded({extended: false})

router.get('/user/signup', userController.register );

router.get('/user/login', userController.userLogin)

router.post('/user/signup', readform, userController.signup);

router.post('/user/login', readform,  passport.authenticate('local',{ 
    successRedirect: '/profile',
    failureRedirect: '/user/login'
    }) 
)

router.get('/profile', isAuth, userController.userProfile)

router.get('/logout', userController.userLogout)

module.exports = router;