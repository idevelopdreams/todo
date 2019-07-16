// GET user/signup
exports.register = (req, res) => {
    res.render('register');
}
// GET /user/login
exports.userLogin = (req, res) => {
    res.render('login');
}
// GET /profile
exports.userProfile = (req, res) => {
    res.render('profile');
}
// GET /logout
exports.userLogout = (req, res) => {
    req.logout();
    res.redirect('/user/login');
}

// POST /user/signup
exports.signup = (req, res) => {
    req.context.db.User.create({
        email:req.body.email ,
        password: req.body.password
    }).then(function(){
        res.redirect('/profile')
    }).catch(function(err){
        console.log(err);
        res.json(err);
    })
}

exports.userSignin = (req,res) => {
    
}