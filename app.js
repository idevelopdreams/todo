const express = require('express');
const routes = require('./routes');
const database = require('./models/todo');
require ('dotenv').config()

const port = process.env.PORT || 3000;

//starting up app
const app = express();

//adding context to our request
app.use((req, res, next) => {
    req.context = {db: database}
    next();
});

//routing manager
app.use(routes);
// setting template engine
app.set("view engine","ejs");

//use middleware to serve static filesl semiddleawre to serve static files use middle ware to server static files use middle ware to serve static files use middle ware to serve static files use middle eware to serve static files use middle ware to serve static filse use middle ware to serve use middleware to serve static files use middleware to serve statle use middle ware to serve static files use middleawre to serve tatic files use middle ware to server static file suse middle ware to serve static files use middle ware to serve static files use middle waer to srve 
app.use(express.static('./public'));
 

app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')  
    console.log('')
})
