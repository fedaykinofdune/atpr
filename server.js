var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();
app.use(bodyParser());

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.post('/payments/confirmations', function(req, res){
  var deposit = {
    currency: req.body.x_currency,
    amount: req.body.x_amount,
    externalAccountId: req.body.x_iduser,
    data: req.body
  };
  console.log('about to deposit', deposit);
  request.post({
    headers: {'content-type': 'application/json' },
    url: 'https://75.101.201.120/v1/deposits',
    body: deposit
  }, function(err, resp) {
    console.log('post finished');
    console.log(err, resp);
    if (err){
      res.send(500);
    } else {
      res.send(200);
    }
  });
});

app.post('/', function(req, res){
  console.log(req.body);
  res.send('Astropay-Ripple payment complete!!');  
});

app.listen(process.env.PORT || 7777);

