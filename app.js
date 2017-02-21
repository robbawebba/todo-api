var express = require('express');
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var todos = require('./routes/todos'); //Todos route
var auth = require('./routes/auth');  // Auth route
var config = require('./config/database'); // get db config file
var passport = require('passport');
var jwt = require('jwt-simple');

// Use native Node promises
mongoose.Promise = global.Promise;
// connect to MongoDB
mongoose.connect(config.database)
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var app = express();

app.use(morgan('dev')); // log to console
app.use(passport.initialize());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false })); // configure app to use bodyParser() - this will let us get the data from a POST
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Content-Disposition, Accept");
  next();
});
app.use('/todos', todos);
app.use('/auth', auth);

require('./config/passport')(passport);

//Demo oute
app.get('/', function(req, res) {
  res.send('Hello! The main API is at /todos');
});

module.exports = app;
