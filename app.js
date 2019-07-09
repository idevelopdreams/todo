const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const urlEncoded = bodyParser.urlencoded({extended: false})

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





const dummyData = [{taskItem: "Work on my portfolio" },{taskItem: "Code and watch anime"},{taskItem: "Sleep"}];

//settnig up
const app = express();
bodyParser.urlencoded({extended: false})
// setting template engine
app.set("view engine","ejs");

//use middleware to serve static filesl semiddleawre to serve static files use middle ware to server static files use middle ware to serve static files use middle ware to serve static files use middle eware to serve static files use middle ware to serve static filse use middle ware to serve use middleware to serve static files use middleware to serve statle use middle ware to serve static files use middleawre to serve tatic files use middle ware to server static file suse middle ware to serve static files use middle ware to serve static files use middle waer to srve 
app.use(express.static('./public'));

// ############### ROUTES ##############

// Get for tasks: returns all tasks
app.get('/', (req, res) => {
    let squl = 'SELECT * FROM task';
    db.query(squl, function (err, results, fields) {
        if (err) throw err;
 // rendering tasks view and passing taskToDo data
        res.render('tasks', {taskToDo: results});
});
   
});
 
// Post for tasks: posting a task
app.post('/tasks', urlEncoded, (req, res) => {
    let task = req.body
    let sql = 'INSERT INTO task SET ?' ;
    db.query(sql, task, function (err, results) {
        if (err) throw err;
 // rendering tasks view and passing taskToDo data
    console.log(results)
    res.redirect('/')
});
    });

// Delete for task: deleting specify task
app.delete("/tasks/:id", (req, res) => {
   let sql = 'DELETE FROM task WHERE ID=1;'
       // deleteing item from data set
    
    dummyData.splice(req.params.id, 1);
    res.json(dummyData)
});
  

app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')  
})
