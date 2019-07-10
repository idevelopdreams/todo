const express = require('express');
const router  = express.Router();
const todoCtrlr = require('../controllers/todo')

// parsing form data
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({extended: false})


// ############### ROUTES ###############


// Get for tasks: returns all tasks
router.get('/', todoCtrlr.allTodos);


// Post for tasks: posting a task
router.post('/tasks',urlEncoded, todoCtrlr.todoPosts);


// Delete for task: deleting specify task
router.delete("/tasks/:id", todoCtrlr.removeTask);


module.exports = router;