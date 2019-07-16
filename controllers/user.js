
// GET for /user/signup
exports.register = (req, res) => {
    res.render('register');
}

exports.login = (req, res) => {
    res.render('login');
};

exports.userPost = (req, res) => {
    res.render('login');
};

exports.profile = (req,res) => {
    res.render('profile');
}

exports.logout = (req,res) => {
    req.logout();
    res.redirect('/user/login');
}

exports.signup = (req,res) => {
    req.context.db.User.create({
        email: req.body.email,
        password: req.body.password
    }).then(() => {
        res.redirect('/profile')
    }).catch((err) => {
        console.log(err);
        res.json(err);
    })

}

