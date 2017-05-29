var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');

var app = express();
var routes = require('./routes/route.js');

//app.set('port', '8000');


// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));


app.get('/', routes.home);
app.get('/:city', routes.city);

var port = process.env.PORT || 8080;

var server = app.listen(port, function(reg, res){
  console.log("Server started and Catch the action at http://localhost:" + port);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
