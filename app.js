const express = require('express')
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended: false})

const dummyData = [];

// setting up
const app = express();
const urlEncoded = bodyphaser.urlencoded({extended: false})

// setting up
const app = express()


// setting up template engine 
app.set("view engine","ejs");


// use middle ware to serve static files
app.use(express.static('./public'));


app.get('/tasks', function (req, res) {
    res.render('tasks')
    console.log(req);
  });

app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})