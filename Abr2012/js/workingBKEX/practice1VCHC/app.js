/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , RedisStore = require('connect-redis')(express)
  , connect = require('connect');

var app = module.exports = express.createServer();

// Configuration

  redisdb = require('redis');
  redis = redisdb.createClient();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  });

  app.configure('production', function(){
    app.use(express.errorHandler());
  });

  // Routes

  app.get('/', routes.index);
  app.get('/edit/:id', routes.edit);
  app.get('/show/:id', routes.show);
  app.post('/getData', function(req, res){

    var data = JSON.stringify(req.body);
    var id = req.body.id;
    console.log('data');
    console.log(data);
    redis.set(id, data, redis.print);
    res.send(true);
  });

  app.post('/gettingData', function(req, res){
    var id = req.body.id;
    redis.get(id, function(err, data){
      res.send(data)
    });
  });



app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
