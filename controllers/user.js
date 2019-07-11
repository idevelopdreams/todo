exports.register = (req, res) => {
    res.render('register')
}
exports.login = (req, res) => {
    res.render('login')
}
exports.profile = (req, res) => {
    res.render('profile')
}
exports.logout = (req, res) => {
    res.redirect('/');
}
// exports.signup =