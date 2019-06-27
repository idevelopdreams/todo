const express = require('express')
const app = express();

// setting template
app.set("view engine","ejs");

// use middle ware to serve static files
app.use(express.static('./public'));


// #################### ROUTES ##################

// get for tasks: returns all tasks
app.get('/tasks', function (req, res) {
    res.render('tasks');
  });

// post for tasks: posting a task
app.post('/tasks', function(req, res){
  console.log('YOOOOO Post route got HIT!!!!')
});

app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})