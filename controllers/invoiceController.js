const Invoice = require('../models/Invoice');
const Quote = require('../models/Quote');

exports.createInvoice = async (req, res) => {
  try {
    const { quoteId } = req.body;

    const quote = await Quote.findById(quoteId).populate('products.productId');
    if (!quote) {
      return res.status(404).json({ error: 'Quote not found' });
    }

    const invoice = new Invoice({
      userId: req.user.id,
      quoteId: quote._id,
      products: quote.products,
      totalPrice: quote.totalPrice,
      status: 'pending',
    });

    await invoice.save();
    res.status(201).json(invoice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({ userId: req.user.id }).populate('quoteId').populate('products.productId');
    res.status(200).json(invoices);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateInvoice = async (req, res) => {
  try {
    const { invoiceId } = req.params;
    const { status } = req.body;

    const invoice = await Invoice.findById(invoiceId);
    if (!invoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }

    invoice.status = status;
    await invoice.save();

    res.status(200).json(invoice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
