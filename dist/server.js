"use strict";

var app = require("./app.js");
var port = process.env.PORT || 5000;
app.listen(port);
console.log("PORT", port);