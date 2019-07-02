const express = require('express')
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended: false})

const dummyData = [{taskItem:" wash Car" },{taskItem: "get some sleep"},{taskItem: "go to work"}];

// setting up
const app = express()

// setting up template engine 
app.set("view engine","ejs");


// use middle ware to serve static files
app.use(express.static('./public'));

<<<<<<< HEAD



app.post('/tasks', urlEncoded, function(req, res){
  console.log('hitting the post')
  let comingin = {}
  comingin.taskItem = req.body.task
  dummyData.push(comingin)
  // console.log(dummyData)
  res.redirect('/tasks')


  // console.log(req.body.task)
  res.redirect('tasks')
});


app.get('/tasks', function (req, res) {
    res.render('tasks', ({taskToDo: dummyData}))
  });

  app.delete("/tasks/:id", function(req, res){
    // console.log(req.params.id);
=======
// ############### ROUTES ##############

// Get for tasks: returns all tasks
app.get('/', (req, res) => {
    // rendering tasks view and passing taskToDo data
    res.render('tasks.ejs', {taskToDo: dummyData});
});

// Post for tasks: posting a task
app.post('/tasks', urlEncoded, (req, res) => {
// formatting for incoming data to add to my data set
  let incomingItem = {};
  incomingItem.taskItem = req.body.task;
  dummyData.push(incomingItem);
  res.redirect('/')
});

// Delete for task: deleting specify task
app.delete("/tasks/:id", (req, res) => {
    // deleteing item from data set
>>>>>>> 2deeac38529ffdc06bfb703875ba40ce9d80ccd9
    dummyData.splice(req.params.id, 1);
    res.json(dummyData)
>>>>>>> dff91661a793fe346dbfa545aad9dbcd9b936b44
});

app.listen(3000, function console.log('hitti'));
    if (err)
        console.log(err)
    console.log('Server is live on port 3000');