const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy

const db = require('../models');

// telling passport we want to use local strategy, in other words we want to use
// email and password
// for signing in
passport.use(new LocalStrategy(
    {  usernameField: 'email' },
    function(email, password, done) {
      db.User.findOne( { where: { email: email } } ).then( function(dbuser){
        // if there is no user with the provided email
        if (!dbuser) {
            return done(null, false, { message: 'Incorrect Email.' } );
        }
        // if there is a user with that email but the password is wrong
        else if (!dbuser.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' } );
        }

        // if none of the above happens, return user
        return done(null, dbuser);
      });
    }
));

// for when a user signs up
passport.use('local-signup', new LocalStrategy(
    {  usernameField: 'email',
       passReqToCallback: true }, // allow us to use the entire request coming from our app},
    function(req, email, password, done) {
      db.User.findOne( { where: { email: email } } ).then( function(dbuser){
        // to verify that the email is not in use
        if (dbuser) {
            return done(null, false, { message: 'Email is already taken.' } );
        } else  {
            // add user to my database
            db.User.create({
                email: email , 
                password: password,
                name: req.body.name
            }).then(function (newUser) {
                if (!newUser){
                    return done(null, false)
                }
                if (newUser){
                    return done(null, newUser)
                }
            }).catch(function (err) {
                console.log(err);
                res.json(err);
            })    
        }
      });
    }
));

// for facebook login
passport.use(new FacebookStrategy({
    clientID: "717685225329429",
    clientSecret: "be1fc81560220c895e19e366d27a831e",
    callbackURL: "/return",
    profileFields: ['id', 'displayName', 'photos', 'email']
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
));






// to authenticate users to a cookie we must serialize the user session
passport.serializeUser(function(user, done) {
    done(null, user);
});
  
// following request need there session to be deserialize 
passport.deserializeUser(function(user, done) {
    done(null, user )
});

// exporting passport for our app to use it
module.exports = passport;