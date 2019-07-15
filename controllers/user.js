
//controlls what the user sees when they hit user/signup 
exports.register = (req, res)=> {
    res.render('register');
}

// GET /user/login
exports.userLogin = (req, res)=> {
    res.render('login');
}

// GET /profile
exports.userProfile = (req, res)=> {
    res.render('profile');
}

// GET for /logout
exports.userLogout = (req, res)=> {
    res.redirect('/');
}

//POST /user/signup

exports.signup = (req, res) => {
    req.context.db.User.create({
       email: req.body.email,
       password: req.body.password
    }).then(function() {
        res.redirect('/profile')
    }).catch(function(err){
        console.log(err);
        res.json(err);
    }) 
}; 

