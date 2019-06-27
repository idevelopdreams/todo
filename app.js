const express = require('express');
const app = express();

app.set("view engine","ejs");

// use middle ware to serve static file
app.use(express.static('./public'));

app.get('/tasks', function (req, res) {
    res.render('tasks');
  });

  app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})