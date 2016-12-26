var express = require('express');
var app = express(); 
var cors = require('cors');

require('./config/express').addMiddleware(app)
app.use(cors());
require('./routes')(app)

app.listen(4000, function() {
  console.log('Express server listening.');
});