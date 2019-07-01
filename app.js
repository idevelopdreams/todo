const express = require('express')
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended: false})

const dummyData = [{taskItem:" wash Car" },{taskItem: "get some sleep"},{taskItem: "go to work"}];


// setting up
const app = express()


// setting up template engine 
app.set("view engine","ejs");


// use middle ware to serve static files
app.use(express.static('./public'));


app.post('/tasks', urlEncoded, function(req, res){
  let comingin = {}
  comingin.taskItem = req.body.task
  dummyData.push(comingin)

  
  // console.log(req.body.task)
  res.redirect('tasks')
});


app.get('/tasks', function (req, res) {
    res.render('tasks', ({taskToDo: dummyData}))
  });

app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})