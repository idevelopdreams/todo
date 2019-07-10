const express = require('express');
const routes = require('./routes');


// starting up
const app = express();

// adding content to our Request
app.use( (req,res , next ) =>{
    req.context = { db: "dummy info"  }
    next(); 
} )


// routing manager
app.use(routes);

// setting template engine
app.set("view engine","ejs");


// use middle ware to serve static files
app.use(express.static('./public'));


app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
 })