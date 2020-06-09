"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _serveFavicon = _interopRequireDefault(require("serve-favicon"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _cors = _interopRequireDefault(require("cors"));

var _cas = _interopRequireDefault(require("./config/cas"));

var _routes = _interopRequireDefault(require("./routes"));

var _associations = _interopRequireDefault(require("./database/associations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // view engine setup

app.set('views', _path["default"].join(__dirname, 'views'));
app.set('view engine', 'jade'); // uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public'))); // Set up an Express session, which is required for CASAuthentication.

app.use((0, _expressSession["default"])({
  secret: 'super secret key',
  resave: false,
  saveUninitialized: true
})); // allow cors

app.use((0, _cors["default"])()); // Register API endpoints

(0, _routes["default"])(app); // Register schema associations

(0, _associations["default"])();
app.get('/session', _cas["default"].bounce, function (req, res) {
  console.log(JSON.stringify(req.session));
  res.send(req.session[_cas["default"].session_name]);
}); // Serve static files from the React app

app.use(_cas["default"].bounce, _express["default"]["static"](_path["default"].join(__dirname, '../client/build'))); // render react app for anything else

app.get('*', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '../client/build/index.html'));
}); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;