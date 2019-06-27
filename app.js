const express = require('express')
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({entended: false})

let dummyData = [];

// setting up 
const app = express();

app.set("view engine","ejs");

// use middle ware to serve static files
app.use(express.static('./public'));

// ============= ROUTES ====================

// Get for tasks: return all tasks
app.get('/tasks', function (req, res) {
    res.render('tasks');
  });

// Post for taks: posting a task
app.post('/tasks', urlEncoded, function(req, res){
  dummyData.push(req.body.task);
  console.log(dummyData);
});

  app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
});