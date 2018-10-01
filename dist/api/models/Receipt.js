'use strict';

var mongoose = require('mongoose');
var receiptSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  storeName: String,
  total: Number,
  currency: String,
  userId: String
});

module.exports = mongoose.model('Receipt', receiptSchema);