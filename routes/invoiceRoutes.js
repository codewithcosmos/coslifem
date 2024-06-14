const express = require('express');
const router = express.Router();
const Invoice = require('../models/Invoice');

// Get all invoices
router.get('/', async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new invoice
router.post('/', async (req, res) => {
  const invoice = new Invoice({
    clientName: req.body.clientName,
    clientAddress: req.body.clientAddress,
    items: req.body.items,
    totalAmount: req.body.totalAmount,
  });

  try {
    const newInvoice = await invoice.save();
    res.status(201).json(newInvoice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
