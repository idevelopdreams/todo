const express = require('express')
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended: false})

const dummyData = [{taskItem: "Work on my portfolio" },{taskItem: "Code and watch anime"},{taskItem: "Sleep"}];

//settnig up
const app = express();
bodyParser.urlencoded({extended: false})
// setting template engine
app.set("view engine","ejs");

//use middleware to serve static filesl semiddleawre to serve static files use middle ware to server static files use middle ware to serve static files use middle ware to serve static files use middle eware to serve static files use middle ware to serve static filse use middle ware to serve use middleware to serve static files use middleware to serve statle use middle ware to serve static files use middleawre to serve tatic files use middle ware to server static file suse middle ware to serve static files use middle ware to serve static files use middle waer to srve 
app.use(express.static('./public'));

// GEt for tasks: returns all tasks
app.get('/tasks', function (req, res) {
    console.log("hitting get route");
    res.render('tasks', {taskToDo: dummyData});
});
 
// Post for tasks: posting a task
app.post('/tasks', urlEncoded, function(req, res){
  console.log("hitting Post route");
  let incomingItem = {}
  incomingItem.taskItem = req.body.task
  dummyData.push(incomingItem)
  console.log(dummyData)
  res.redirect('/tasks')
});
app.delete("/tasks/:id",function(req,res){
  //console.log(req.params.id)
  console.splice(req.params.id, 1);
  //console.log("hitting delete route");
res.json(dummyData)
});
  

app.listen(4000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')  
})
