const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models/');
// telling password to use local Strategy
// email and password
passport.use(new LocalStrategy(
  { usernameField: 'email' },
  function(email, password, done) {
    db.User.findOne( { where: {email: email} }).then( (dbUser)=> {
        // if no user 
        if (dbUser) {
            return done(null, false, { message: 'Incorrect email.' });
        }
        // if email correct but password is wrong
        else if (dbUser.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        // if none happens return user
        return done(null, dbUser)

    });
  }
));

// user authentification using cookies
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user)
});

// exporting
module.exports = passport;