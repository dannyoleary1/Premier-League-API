var express = require('express');

var app = express(); 

require('./config/express').addMiddleware(app)
require('./routes')(app)

app.listen(4000, function() {
  console.log('Express server listening.');
});