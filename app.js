const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'admin',
    password : 'avacado1219',
    database : 'ninjatasker'
})

db.connect((err) => {
     if (err) throw err;
     console.log("db is connected")
})

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
app.get('/tasks',(req, res) => {
    let sql = 'SELECT * FROM task'
    db.query(sql,(err, results) => {
        if (err) throw err;
        // rendering tasks with dummyData list
       res.render('tasks', {taskToDo: results});
    });
});

// Post for tasks: posting a task
app.post('/tasks', urlEncoded,(req, res) => {
    let task = req.body;
    // console.log(req.body)
    let sql = 'INSERT INTO task SET ?';
    db.query(sql, task,(err, results) => {
        if(err) throw err;
        console.log(results);
        res.redirect('/tasks');
    });
// formatting for incoming requests
});

// delete for tasks
app.delete("/tasks/:id",(req, res) => {
    // deleting item from data set
    let sql = 'DELETE  FROM task WHERE ID=' + req.params.id;
        db.query(sql,(err, result) =>{
            if(err) throw err;
            console.log(result);
            res.json(result)
        })
});

app.listen(3000,(err) => {
    if (err);
        console.log(err);
    console.log('Server is live on port 3000');
})