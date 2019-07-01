const express = require('express')
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended: false})

<<<<<<< HEAD
const dummydata = []; 

//setting up
const app = express();

//setting template engine
=======
const dummyData = [];

// setting up
const app = express();

// setting template engine
>>>>>>> a1234abf2f95b710fdabacd56d6fc3d13104b6c0
app.set("view engine","ejs");

//use middleware to serve static files
app.use(express.static('./public'));


<<<<<<< HEAD
//########### ROUTES ############

//Get for Tasks: returns all tasks
=======

// ############### ROUTES ##############

// Get for tasks: returns all tasks
>>>>>>> a1234abf2f95b710fdabacd56d6fc3d13104b6c0
app.get('/tasks', function (req, res) {
    res.render('tasks');
});

// Post for tasks: posting a task
app.post('/tasks', urlEncoded, function(req, res){

  dummyData.push(req.body.task)
  console.log(dummyData)

});

<<<<<<< HEAD
  // Post for tasks: posting a task
  app.post('/tasks', urlEncoded, function(req, res){
  
    dummydata.push(req.body.task)
    console.log(dummydata)
  });

  app.listen(3000, function(err){
=======
app.listen(3000, function(err){
>>>>>>> a1234abf2f95b710fdabacd56d6fc3d13104b6c0
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})