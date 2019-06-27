// connecting express to File
const express = require('express');
// quickens express function
const app = express();

// adding middleware
app.set('view engine', "ejs"); //setting up templating engine

// asking it to render a page like a html css or js
app.get('/home', function(req, res){
    res.render("home");
});

// Setting server port and error notification
app.listen(3000, function(err){
    if (err){
        console.log(err);
    }
        console.log('server is live on port 3000')
});

