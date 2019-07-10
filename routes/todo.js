const express = require('express')
const router = express.Router();
const todoControllers = require ('../controllers/todo')


const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({extended: false})


// ############### ROUTES ##############

// Get for tasks: returns all tasks
router.get('/',todoControllers.allTodos);

// Post for tasks: posting a task
router.post('/tasks', urlEncoded,todoControllers.postTodos);


// Delete for task: deleting specify task
router.delete("/tasks/:id", todoControllers.deleteTodos);

module.exports= router;