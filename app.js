const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();

// register the mustache template engine
app.engine('mustache', mustacheExpress());
// set mustache as the engine to use for our views
app.set('view engine', 'mustache');
// tell express where the view files are located
app.set('views', './views');

// set app to use bodyParser() middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  res.render("index", {});
});

app.post("/", function(req, res) {
  res.render("index", req.body);
});

app.listen(3000, function(){
  console.log('sucessfully started express application')
});
