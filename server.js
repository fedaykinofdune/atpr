var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());

app.post('/payments/confirmations', function(req, res){
  console.log(req.body);
});

app.post('/payments/returns', function(req, res){
  console.log(req.body);
});

app.get('/', function(req, res){
  res.send('Astropay-Ripple');  
});

app.listen(process.env.PORT || 7777);

