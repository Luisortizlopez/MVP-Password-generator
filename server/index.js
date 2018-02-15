var express = require('express');

var app = express();


app.use(express.static(__dirname + '/../client/dist'));

app.listen(3012, function(){
  console.log('My server is listening on port 3000');
});
