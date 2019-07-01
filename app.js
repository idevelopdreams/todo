const express = require('express')
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended: false})

const dummyData = [];
<<<<<<< HEAD

//settnig up
const app = express();
bodyParser.urlencoded({extended: false})
=======

// setting up
const app = express();

>>>>>>> a1234abf2f95b710fdabacd56d6fc3d13104b6c0
// setting template engine
app.set("view engine","ejs");

//use middleware to serve static filesl semiddleawre to serve static files use middle ware to server static files use middle ware to serve static files use middle ware to serve static files use middle eware to serve static files use middle ware to serve static filse use middle ware to serve use middleware to serve static files use middleware to serve statle use middle ware to serve static files use middleawre to serve tatic files use middle ware to server static file suse middle ware to serve static files use middle ware to serve static files use middle waer to srve 
app.use(express.static('./public'));

<<<<<<< HEAD
// GEt for tasks: returns all tasks
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
  //Post for tasks: posting a taskg
app.post('/tasks',urlEncoded, function(req, res){
  dummyData.push(req.body.task)
  console.log(dummyData)

  
});
  app.listen(3000, function(err){
=======
app.listen(3000, function(err){
>>>>>>> a1234abf2f95b710fdabacd56d6fc3d13104b6c0
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')  
})