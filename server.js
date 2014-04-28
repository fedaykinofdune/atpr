var express = require('express');

var app = express();

app.post('/payments/confirmations', function(req, res){
  console.log(req.body);
});

app.get('/', function(req, res){
  res.send('Astropay-Ripple');  
});

app.listen(process.env.PORT || 7777);

