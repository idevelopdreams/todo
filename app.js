require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const database = require('./models');
const session = require('express-session');
const passport = require('./config/passport');
//parsing form data
const bodyParser = require('body-parser').urlencoded({extended: false})

const port = process.env.PORT || 3000 ;

// starting are app
const app = express();

//adding context to our request
app.use( (req, res, next ) => {
    req.context = { db: database }
    next();
});


// setting template engine
app.set("view engine","ejs");

// setting up all mideware
app.use(express.static('./public'));
app.use(bodyParser);
app.use(session({ secret: "mega oof", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//routing manager
app.use(routes);


database.sequelize.sync().then(function(){
    app.listen(port, function(err){
        if (err)
            console.log(err)
        console.log('Server is live on port: ' + port)
    })
});



