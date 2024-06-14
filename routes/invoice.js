// routes/quote.js
const express = require('express');
const { createQuote, getQuotes, updateQuote } = require('../controllers/quoteController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, createQuote);
router.get('/', protect, getQuotes);
router.put('/:quoteId', protect, updateQuote);

module.exports = router;

// routes/invoice.js
const express = require('express');
const { createInvoice, getInvoices, updateInvoice } = require('../controllers/invoiceController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, createInvoice);
router.get('/', protect, getInvoices);
router.put('/:invoiceId', protect, updateInvoice);

module.exports = router;
