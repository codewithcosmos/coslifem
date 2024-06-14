const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

// Get all quotes
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new quote
router.post('/', async (req, res) => {
  const quote = new Quote({
    clientName: req.body.clientName,
    clientAddress: req.body.clientAddress,
    items: req.body.items,
    totalAmount: req.body.totalAmount,
  });

  try {
    const newQuote = await quote.save();
    res.status(201).json(newQuote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
