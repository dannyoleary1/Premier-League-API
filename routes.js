module.exports = function(app) {

  app.use('/api/players', require('./api/players/index'));
  app.use('/api/teams', require('./api/teams/index'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|app|assets)/*')
   .get(function(req, res) {
    res.send(404);
  })

};