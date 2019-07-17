const express = require('express');
const router  = express.Router();
const todoCtrlr = require('../controllers/todo')


// ############### ROUTES ###############


// Get for tasks: returns all tasks
router.get('/', todoCtrlr.allTodos);


// Post for tasks: posting a task
router.post('/tasks', todoCtrlr.todoPosts);


// Delete for task: deleting specify task
router.delete("/tasks/:id", todoCtrlr.removeTask);


module.exports = router;