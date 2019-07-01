const express = require('express')
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended: false})

<<<<<<< HEAD
const dummyData = [{taskItem:"X" },{taskItem: "Y"},{taskItem: "Z"}];

=======
const dummyData = [{taskItem: "Work on my portfolio" },{taskItem: "Code and watch anime"},{taskItem: "Sleep"}];
>>>>>>> f9204b855cfdd55ffba65e6b20e55ae733c2198d

// setting up
const app = express()


// setting up template engine 
app.set("view engine","ejs");


// use middle ware to serve static files
app.use(express.static('./public'));


app.get('/tasks', function (req, res) {
<<<<<<< HEAD
    res.render('tasks', ({taskItem: dummyData}))
  });
=======
    res.render('tasks', {taskToDo: dummyData});
});

// Post for tasks: posting a task
app.post('/tasks', urlEncoded, function(req, res){
  let incomingItem = {}
  incomingItem.taskItem = req.body.task
  dummyData.push(incomingItem)
  console.log(dummyData)
  res.redirect('/tasks')
});
>>>>>>> f9204b855cfdd55ffba65e6b20e55ae733c2198d

app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})