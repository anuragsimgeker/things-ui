var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/', function(req, res) {
  res.send('Hello');
});

module.exports = app;

http.listen(3000, function(){
  console.log('App running');
});
