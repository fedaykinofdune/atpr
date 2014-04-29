var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();
app.use(bodyParser());

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.post('/payments/confirmations', function(req, res){
  try {
    request.post('https://75.101.201.120/v1/deposits', { form: {
      currency: req.body.x_currency,
      amount: req.body.x_amount,
      externalAccountId: req.body.x_iduser,
      data: req.body
    }}, function(err, resp) {
      console.log(err, resp);
    });
  } catch(e) {
    console.log('error', e);
  }
});

app.post('/', function(req, res){
  console.log(req.body);
  res.send('Astropay-Ripple payment complete!!');  
});

app.listen(process.env.PORT || 7777);

