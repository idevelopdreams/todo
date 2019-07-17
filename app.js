require('dotenv').config()
const express  = require('express');
const routes   = require('./routes');
const database = require("./models");
const session = require('express-session')
const passport = require('./config/auth')


// parsing form data
const bodyParser = require('body-parser').urlencoded({extended: false});


const port = process.env.PORT || 3000;

// starting up app
const app = express();


// adding somthing to request
app.use((req, res, next) => {
    req.context = { database: database }
    next();
});

// setting template engine
app.set("view engine","ejs");


// middle ware
app.use(express.static('./public'));
app.use(bodyParser);
app.use(session({ secret: "I Love Eating Blocks of Cheese", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
    
app.use(routes)

database.sequelize.sync().then(function(){
    // Listening for request and port 3000
    app.listen(port, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port: '+port)
});
});

