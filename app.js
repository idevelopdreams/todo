require('dotenv').config()
const express    = require('express');
const routes     = require('./routes');
const database   = require('./models')
const session = require('express-session')
const passport = require('./config/password');

const port = process.env.PORT || 3000 ;

// starting up
const app = express();

// adding context to req
app.use( (req, res, next ) => {
    req.context = { db: database }
    next();
} );

// routing manager
app.use(routes);

// setting template engine
app.set("view engine","ejs");

// use middle ware 
app.use(express.static('./public'));
app.use(session({ secret: "spaghetti", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());



database.sequelize.sync().then(()=>{
    app.listen(port,(err) => {
        if (err);
            console.log(err);
        console.log('Server is live on port ' + port);
    })
});

