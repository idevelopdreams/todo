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
  console.log('hitting the post')
  let comingin = {}
  comingin.taskItem = req.body.task
  dummyData.push(comingin)
  // console.log(dummyData)
  res.redirect('/tasks')


  // console.log(req.body.task)
  res.redirect('tasks')
});


app.get('/tasks', function (req, res) {
    res.render('tasks', ({taskToDo: dummyData}))
  });

  app.delete("/tasks/:id", function(req, res){
    // console.log(req.params.id);
    dummyData.splice(req.params.id, 1);
    // console.log(dummyData);
    res.json(dummyData)
>>>>>>> dff91661a793fe346dbfa545aad9dbcd9b936b44
});

app.listen(3000, function  console.log('hitti');
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})