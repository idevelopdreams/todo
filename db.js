const mysql = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : '145520Aw',
    database : 'ninjatasker'
  });

  db.connect(function(err){
    if (err) throw (err);
    console.log("DB is connected...")
  });

  module.exports = db;