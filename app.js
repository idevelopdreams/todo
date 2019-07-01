const express = require('express')
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended: false})

const dummyData = [];

//settnig up
const app = express();
bodyParser.urlencoded({extended: false})
// setting template engine
app.set("view engine","ejs");

//use middleware to serve static filesl semiddleawre to serve static files use middle ware to server static files use middle ware to serve static files use middle ware to serve static files use middle eware to serve static files use middle ware to serve static filse use middle ware to serve use middleware to serve static files use middleware to serve statle use middle ware to serve static files use middleawre to serve tatic files use middle ware to server static file suse middle ware to serve static files use middle ware to serve static files use middle waer to srve 
app.use(express.static('./public'));

// GEt for tasks: returns all tasks
app.get('/tasks', function (req, res) {
    res.render('tasks');
});

// Post for tasks: posting a task
app.post('/tasks', urlEncoded, function(req, res){

  dummyData.push(req.body.task)
  console.log(dummyData)

});

  //Post for tasks: posting a taskg
app.post('/tasks',urlEncoded, function(req, res){
  dummyData.push(req.body.task)
  console.log(dummyData)

  
});
  app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')  
})