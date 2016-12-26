module.exports = function(app) {

  app.use('/api/players', require('./api/players/index'));
  //app.use('/api/statistics', require('./api/product'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|app|assets)/*')
   .get(function(req, res) {
    res.send(404);
  })

};