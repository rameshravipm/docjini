'use strict';

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _Receipts = require('./api/routes/Receipts');

var _Receipts2 = _interopRequireDefault(_Receipts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var app = express();


// Body parser for post data
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
console.log(process.env.MONGO_ATLAS_PWD);
// mongodb connect
_mongoose2.default.connect('mongodb+srv://node-shop:' + process.env.MONGO_ATLAS_PWD + '@cluster0-xtw9v.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
_mongoose2.default.connection.on("connected", function () {
  console.log("connecteddb");
});
_mongoose2.default.connection.on("disconnected", function () {
  console.log("disconhellonected");
});
// Allow CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// Default Route
app.use('/receipts', _Receipts2.default);

// Error Route
app.use(function (req, res, next) {
  var error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;