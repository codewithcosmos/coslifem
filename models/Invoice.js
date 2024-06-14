
// models/Invoice.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const invoiceSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quoteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quote', required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'paid', 'canceled'], default: 'pending' },
}, { timestamps: true });

const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;