const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
  },
  clientAddress: {
    type: String,
    required: true,
  },
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Quote', quoteSchema);
