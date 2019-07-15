require('dotenv').config()

const express = require('express');
const routes  = require('./routes');
const database= require('./models');
const session = require('express-session');
const passport = require('./config/passport');



const port = process.env.PORT || 3000 ;

// starting up app
const app = express();

// adding context to our request
app.use( (req, res, next ) => {
    req.context = { db: database }
    next();
})

// routing manager
app.use(routes);

// setting template engine
app.set("view engine","ejs");

// use middle ware to serve static files
app.use(express.static('./public'));
app.use(session({secret: 'I love veros cohort 2019', resave: true, saveUninitialized: true})); 
app.use(passport.initialize());
app.use(passport.session());

database.sequelize.sync().then(function(){
    app.listen(port, (err) => {
        if (err)
            console.log(err)
        console.log('Server is live on port: ' + port)
    })
});