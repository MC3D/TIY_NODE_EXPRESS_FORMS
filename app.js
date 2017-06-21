(function(){
  'use strict';

  const express = require('express');
  const mustacheExpress = require('mustache-express');
  const bodyParser = require('body-parser');
  const expressValidator = require('express-validator');
  const app = express();

  // register the mustache template engine
  app.engine('mustache', mustacheExpress());
  // set mustache as the engine to use for our views
  app.set('view engine', 'mustache');
  // tell express where the view files are located
  app.set('views', './views');

  // set app to use middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(expressValidator());

  app.get('/', function(req, res) {
    let context = {};
    res.render('index', context);
  });

  app.post('/signup', function(req, res) {
    req.checkBody('first_name', 'first name is missing').notEmpty();
    // errors is either false or an array
    let errors = req.validationErrors();
    let context = {};
    if(errors) {
      context['errors'] = errors;
      res.render('index', context);
    } else {
      context = req.body;
      res.render('user', context);
    }
  });

  app.listen(3000, function(){
    console.log('sucessfully started express application')
  });
})();
