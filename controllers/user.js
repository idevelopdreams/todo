exports.register = (req, res)=> {
    res.render('register');
}

exports.userLogin = (req, res)=> {
    res.render('login');
}

exports.userProfile = (req, res)=> {
    res.render('profile');
}

exports.userLogout = (req, res)=> {
    res.redirect('/');
}