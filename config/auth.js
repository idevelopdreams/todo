const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');


// tellign passport we want to use local strategy, in other words we want to use an email & password
// email & password


// signing in
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


// signing up
passport.use("local-signup", new LocalStrategy(
  { usernameField: "email",
    passReqToCallback: true
    }, 
  function(req, email, password, done) {
    db.Users.findOne({where: {email: email}}).then(function(dbUsers){
      // verify that the email is not in user
      if (dbUsers){
        return done(null, false, { message: 'Email already used!' }); 
      // If Password is incorrect
      } else{
          // add user to database
          db.Users.create({
            email: email,
            password: password,
            name: req.body.name
          }).then(function(newUser){
            if (!newUser){
              return done(null, false)
            }
            if (newUser){
              return done(null, newUser)
            }
          }).catch(function(err){
              console.log(err);
              res.json(err);
          })
        }
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