"use strict";

var http = require("http");
var app = require("./app.js");
var port = 2689;
var server = http.createServer(app);
server.listen(port);