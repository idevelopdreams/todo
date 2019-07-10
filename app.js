const express = require('express');
const routes = require('./routes');
const database = require('./models/todo')

// setting up
const app = express();

// adding context to our request
app.use( (req, res, next) => {
    req.context = { db: database }
    next();
} );

// routing manager
app.use(routes);

// setting template engine
app.set("view engine","ejs");

// use middle ware to serve static files
app.use(express.static('./public'));

// Server Test
app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
});