const express = require('express')
const  bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended:false})

const dummyData = [];
// starting up 
const app = express();

app.set("view engine","ejs");
// USE MIDDLE WARE TO SERVE STATIC FILES 
app.use(express.static('./public'));

// ###### Routes #########


// Get for task ; return all task 
app.get('/tasks', function (req, res) {
    res.render('tasks');
  });

  //post for task ; posting a task 
  app.post ('/tasks', urlEncoded ,function(req,res){
    dummyData.push(req.body.tasks)
    console.log(dummyData)
  });

  app.listen(4000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 4000')
})