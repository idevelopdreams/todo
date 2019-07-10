const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo')


// Parsing data
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended: false})

// #######################ROUTES###########################

// Get for tasks: returns all tasks
router.get('/tasks', todoController.allTodos);

// Post for tasks: posting a task
router.post('/tasks', urlEncoded, todoController.allPosts);

// delete for tasks
router.delete("/tasks/:id", todoController.allDeletes);

module.exports = router;
