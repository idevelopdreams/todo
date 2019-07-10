const express = require('express');
const router = express.Router();

//parsing form data
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({extended: false})
// ############### ROUTES ##############

// Get for tasks: returns all tasks
router.get('/', (req, res) => {
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
    let sql = 'DELETE  FROM task WHERE ID=' + req.params.id;
    db.query(sql,(err, result) =>{
        if(err) throw err;
        console.log(result);
        res.json(result)
    })
});

module.exports = router;