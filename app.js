const express = require('express')
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended: false})

const dummydata = []; 

//setting up
const app = express();

//setting template engine
app.set("view engine","ejs");

//use middleware to serve static files
app.use(express.static('./public'));


//########### ROUTES ############

//Get for Tasks: returns all tasks
app.get('/tasks', function (req, res) {
    res.render('tasks');
  });

  // Post for tasks: posting a task
  app.post('/tasks', urlEncoded, function(req, res){
  
    dummydata.push(req.body.task)
    console.log(dummydata)
  });

  app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})