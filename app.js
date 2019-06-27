const express = require('express')
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended: false})

let data = [];


// setting up app
const app = express();


// use middleware to server static files
app.use(express.static('./public'));

app.set("view engine","ejs");


// use middle ware to serve static files
app.use(express.static('./public'));

// #################### ROUTES###########################
// Get4Tasks: returns all tasks
app.get('/tasks', function (req, res) {
    res.render('tasks');
  });

// POST for Tasks: posting a task
app.post('/tasks', urlEncoded, function (req, res){
  data.push(req.body.task)
  console.log(data)
});

app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})
