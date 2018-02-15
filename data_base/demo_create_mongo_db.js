var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});





/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Holacode",
  database: "passwords"
});

var selectAll = function(cb) {
  con.query('SELECT * FROM given_passwords', (err, results, fields)=> {
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};


var insertOne = function(randompassword, cb) {
  con.query('INSERT INTO given_passwords (randompassword) VALUES (?, ?)',
    [randompassword], (err, results, fields) => {
      if(err) {
        cb(err, null);
      } else {
        cb(null, results);
      }
    });
};

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;*/
