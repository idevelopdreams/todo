const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models/');
// telling password to use local Strategy
// email and password
passport.use(new LocalStrategy(
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
