const express = require('express');

// allows taking specific info from code sent in from server post
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({extended:false});

let data = [];


// setting up
const app = express();

// setting template
app.set("view engine","ejs");

// use middle ware to serve static files
app.use(express.static('./public'));


// #################### ROUTES ##################

// get for tasks: returns all tasks
app.get('/tasks', function (req, res) {
    res.render('tasks');
  });

// post for tasks: posting a task
app.post('/tasks', urlEncoded, function(req, res){
  data.push(req.body.task);
  console.log(data)
});

app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})