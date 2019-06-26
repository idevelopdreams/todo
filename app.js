const express = require('express')
const app = express()
app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
});

app.set("view engine", "ejs"); // setting up templating engine

app.get('/home', function (req, res) {
    res.render('home');
  })
  