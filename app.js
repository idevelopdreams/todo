const express  = require('express');
const routes   = require('./routes');
const database = require('./models/todo')

// starting up app
const app = express();


// adding somthing to request
app.use((req, res, next) => {
    req.context = { db: database }
    next();
});


// routing manager
app.use(routes)


// setting template engine
app.set("view engine","ejs");


// use middle ware to serve static files
app.use(express.static('./public'));


// Listening for request and port 3000
app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
}) 