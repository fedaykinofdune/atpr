var express = require('express');
var util = require('util');

var app = express();

app.post('/payments/confirmations', function(req, res){
  util.puts(req.body);
});

app.get('/', function(req, res){
  res.send('Astropay-Ripple');  
});

app.listen(process.env.port || 7777);

