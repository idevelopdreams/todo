const mysql = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin2',
    password : 'student',
    database : 'ninjatasker'
});

db.connect(function(err){
    if (err) throw err;
    console.log("DB is connected ...");
});