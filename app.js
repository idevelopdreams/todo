const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const urlEncoder = bodyParser.urlencoded({entended: false});
const dummyData = [{taskItem: 'XS'}, {taskItem: 'Y'}, {taskItem: 'XYZ'}];

app.set("view engine","ejs");

// use middle ware to serve static files
app.use(express.static('./public'));

app.get('/tasks', function (req, res) {
    res.render('tasks', {taskToDo: dummyData});
  });

  // Post for tasks: posting a task
  app.post('/tasks', urlEncoder, function(req, res){
    dummyData.push(req.body.task);
    console.log(dummyData);
  });

  app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})