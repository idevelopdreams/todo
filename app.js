const express = require('express');
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({extended: false});

let dummydata = [];

const app = express();

// setting up temp engine
app.set("view engine","ejs");

// use middle ware to serve static files
app.use(express.static('./public'));


// ######## ROUTES ##############

// get for tasks 
app.get('/tasks', urlEncoded, function (req, res){
    res.render('tasks');
});

// post for tasks
app.post('/tasks', urlEncoded, function(req, res){

  dummydata.push(req.body.task);
  console.log(dummydata);
  
});

app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})