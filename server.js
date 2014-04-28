var express = require('express');
var util = require('util');

var app = express();

app.post('/payments/confirmations', function(req, res){

  util.puts(req.body);

});

app.listen();

