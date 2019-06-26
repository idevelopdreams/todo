const express = require('express')
const app = express()
 
// adding middleware
app.set("view engine", "ejs"); // setting up templating

app.get('/home', function (req, res) {
  res.render('home');
})
 
app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on Port 3000')
})