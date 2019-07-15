const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models')
// telling passport we want to use local strategy, in other words we want to use
// email and passwords
passport.use(new LocalStrategy(
    {usernameField: 'email'},
    function(email, password, done) {
      db.User.findOne( {where: { email: email } } ).then( function(dbuser){
        //   if there is no user with the provided email
        if (!dbuser) {
            return done(null, false, { message: 'Incorrect Email.' } );
        }
        // if there is a suer with that email but the password is wrong
        else if (!dbuser.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' } );
        }

        // if none of the above happens, return user
        return done(null, dbuser);
      });
    }
  ));

// to authenticate users to a cookie we must serialize the user session
passport.serializeUser(function(user, done) {
    done(null, user);
  });
// following request need there session to be deserialize
passport.deserializeUser(function(user, done) {
    done(null, user)
});

  //   exporting passport for our app to use it in other files
module.exports = passport;