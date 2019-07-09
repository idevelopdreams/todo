const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const dataBase = mysql.createConnection({
   host     : 'localhost',
   user     : 'admin',
   password : 'student',
   database : 'ninjatasker'
});

dataBase.connect((err) => {
   if (err) throw err;
   console.log("DB is Connected")
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
app.get('/', (req, res) => {
   let sql = 'SELECT * FROM task';
   dataBase.query(sql, function (err, results) {
       if (err) throw err;
       // rendering tasks view and passing taskToDo data
       res.render('tasks.ejs', {taskToDo: results});
     });
});

// Post for tasks: posting a task
app.post('/tasks', urlEncoded, (req, res) => {
// formatting for incoming data to add to my data set
   let task = req.body
   let sql = 'INSERT INTO task SET ?'
   dataBase.query(sql, task, function (err, results){
       if (err) throw err;
       res.redirect('/')
       console.log(results)
   });
});

// Delete for task: deleting specify task
app.delete("/tasks/:id", (req, res) => {
   // deleteing item from data set
   dummyData.splice(req.params.id, 1);
   res.json(dummyData)
});

// Listening for request and port 3000
app.listen(3000, function(err){
   if (err)
       console.log(err)
   console.log('Server is live on port 3000')
})