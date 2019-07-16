// this is my route manager 
const express = require('express');
const todo    = require('./todo');
const user    = require('./user');

const router  = express.Router();


router.use(todo);
router.use(user);

module.exports = router;