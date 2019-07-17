// middleware for restricting route access
module.exports = (req, res, next) => {
    // if the user is logged in, continute to restricted route
    if(req.user){
        return next();
    }
    return res.redirect('/user/login')
}