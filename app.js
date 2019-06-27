const express = require('express')
<<<<<<< HEAD
const  bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended:false})

const dummyData = [];
// starting up 
=======
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended: false})

const dummyData = [];

// setting up
>>>>>>> a1234abf2f95b710fdabacd56d6fc3d13104b6c0
const app = express();

// setting template engine
app.set("view engine","ejs");
// USE MIDDLE WARE TO SERVE STATIC FILES 
app.use(express.static('./public'));

<<<<<<< HEAD
// ###### Routes #########


// Get for task ; return all task 
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
  //post for task ; posting a task 
  app.post ('/tasks', urlEncoded ,function(req,res){
    dummyData.push(req.body.tasks)
    console.log(dummyData)
  });

  app.listen(4000, function(err){
=======
app.listen(3000, function(err){
>>>>>>> a1234abf2f95b710fdabacd56d6fc3d13104b6c0
    if (err)
        console.log(err)
    console.log('Server is live on port 4000')
})