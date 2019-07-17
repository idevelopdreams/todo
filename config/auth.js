const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models');

// tellign passport we want to use local strategy, in other words we want to use an email & password
passport.use(new LocalStrategy(
  {usernameField: "email"},
    function(email, password, done) {
        // If Email is incorrect
      db.Users.findOne({where: {email: email}}).then(function(dbUser){
        if (!dbUser) {
            return done(null, false, { message: 'Incorrect E-mail!' });
          }
        // If Password is incorrect
        else if (!dbUser.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
          }

        // If none of the above happens, return user
        return done(null, dbUser)
      });
    }
  ));

// to authenicate a cookie we must serialize the user session
  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
// following request need there session to be deserialized
  passport.deserializeUser(function(user, done) {
    done(null, user)
  });
// exporting passport for our app
module.exports = passport;