const express = require('express')
const app = express();

app.set("view engine","ejs");

<<<<<<< HEAD
//use middleware to serve static files
=======
// use middle ware to serve static files
>>>>>>> d228d9f63c83ba78d1c437afdb793d374f4a1726
app.use(express.static('./public'));

app.get('/tasks', function (req, res) {
    res.render('tasks');
  });

  app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})