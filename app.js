const express = require('express')
const bodyParser = require('body-parser')
<<<<<<< HEAD
const urlEncoded = bodyParser.urlencoded({extended:false})
+6
const urlEncoded = bodyParser.urlencoded({extended: false})
>>>>>>> a1234abf2f95b710fdabacd56d6fc3d13104b6c0

const dummyData = [];

// setting up
const app = express();

// setting template engine
app.set("view engine","ejs");

// use middle ware to serve static files
app.use(express.static('./public'));



// ############### ROUTES ##############

// Get for tasks: returns all tasks
app.get('/tasks', function (req, res) {
    res.render('tasks');
});

// Post for tasks: posting a task
app.post('/tasks', urlEncoded, function(req, res){

  dummyData.push(req.body.task)
  console.log(dummyData)

});

app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})