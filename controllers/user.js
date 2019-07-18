const passport = require('../config/auth')

// GET 4 /user/signup
exports.register = (req, res) => {
    res.render('register')
}
// GET 4 /user/login
exports.login = (req, res) => {
    res.render('login')
}
// GET 4 /user/profile
exports.profile = (req, res) => {
    res.render('profile', 
    {currentUser: req.user})
}
// GET 4 /logout
exports.logout = (req, res) => {
    req.logout();
    res.redirect('/user/login');
}
// POST 4 /user/signup
exports.signup = passport.authenticate('local-signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup'
})
// POST 4 /user/login
exports.userSignin = passport.authenticate('local',{
    successRedirect: '/user/profile',
    failureRedirect: '/user/login'
    })
