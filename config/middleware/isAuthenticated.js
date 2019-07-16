// restricting route access
module.exports = (req, res, next) => {
    // if the user is logged in allow profile else revert to login page
    if(req.user){
        return next();
    }
    return res.redirect('/user/login')
};