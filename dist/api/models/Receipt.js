'use strict';

var mongoose = require('mongoose');
var receiptSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  storeName: String,
  total: { type: Number, default: 0.00 },
  currency: { type: String, default: "GBP" },
  userId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Receipt', receiptSchema);