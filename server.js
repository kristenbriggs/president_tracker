'use strict'

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));


app.listen(process.env.PORT || 5000, function() {
  console.log('its running');
});

app.get('/*', function (req, res) {
  console.dir(res);
  res.sendStatus(404);
});

//testing
