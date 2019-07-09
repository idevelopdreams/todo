const express = require('express')
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended: false})
const mysql = require('mysql')

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin2',
  password : 'student',
  database : 'ninjatasker'
})

db.connect(function(err){
  if (err) throw err
  console.log('database connected')
});

const dummyData = [{taskItem: "Work on my portfolio" },{taskItem: "Code and watch anime" },{taskItem: "Sleep" }];
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : 'student',
    database : 'ninjatasker'
});

db.connect(function(err){
    if (err) throw err;
    console.log("DB is connected ...");
});


const urlEncoded = bodyParser.urlencoded({extended: false})

const dummyData = [{taskItem: "Work on my portfolio" },{taskItem: "Code and watch anime"},{taskItem: "Sleep"}];

// setting up
const app = express();

// setting template engine
app.set("view engine","ejs");

// use middle ware to serve static files
app.use(express.static('./public'));



// ############### ROUTES ##############

// Get for tasks: returns all tasks
app.get('/tasks', (req, res) => {
  let sql = 'SELECT * FROM task';
  db.query(sql, function (err, results){
    if (err) throw err;
    // Rendering task view and passing taskToDo data
    res.render('tasks', {taskToDo: results});
  });
});
// STORAGE: 'tasks', {taskToDo: dummyData}


// Post for tasks: posting a task
app.post('/tasks', urlEncoded, function(req, res){
  let task = {taskItem: req.body.task};
  console.log(req.body);
  let sql = 'INSERT INTO task SET ?';
  db.query(sql, task, function (err, results){
    if (err) throw err;
    // Rendering task view and passing taskToDo data
    console.log('task added')
    res.render('tasks', {taskToDo: results});
  });

  // formatting for incoming data to add to data set
  // let incomingItem = {};
  // incomingItem.taskItem = req.body.task;
  // dummyData.push(incomingItem);
  // res.redirect('/');
});

app.delete("/tasks/:id", function(req, res){
  // Deleting item from data set
  dummyData.splice(req.params.id, 1);
  res.json(dummyData);
});

app.listen(3000, function(err){
  if (err) {}
    console.log(err);
  console.log('Server is live on port 3000');
});

