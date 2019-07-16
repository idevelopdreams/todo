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
    res.render('profile')
}
// GET 4 /user/logout
exports.logout = (req, res) => {
    res.redirect('/');
}
// POST 4 /user/signup
exports.signup = (req, res) => {
    console.log(req.body)
    req.context.database.Users.create({
        email: req.body.email,
        password: req.body.password
    }).then(function(){
        res.redirect('/user/profile')
    }).catch(function(err){
        console.log(err);
        res.json(err);
    })
}


exports.userSignin = (req, res) => {
 
};