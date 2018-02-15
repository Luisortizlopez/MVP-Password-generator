var express = require('express');
var bodyParser = require('body-parser');
var database = require('../data_base/index.js');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/passwords', function(req, res){
  database.selectAll((err, results) => {
    if(err) {
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  })
})


app.post('/passwords', function(req, res){

  let randompassword   = req.body.randompassword;

  if(!randompassword) {
    res.sendStatus(400);
  } else {
    database.insertOne(description, quantity, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.status(200).json(results);
      }
    });
  }

});

app.listen(3012, function() {
  console.log('Server started and listening on port 3000');
});
