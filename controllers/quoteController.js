const Quote = require('../models/Quote');
const Product = require('../models/Product');

exports.createQuote = async (req, res) => {
  try {
    const { products } = req.body;
    let totalPrice = 0;

    const quoteProducts = await Promise.all(
      products.map(async (item) => {
        const product = await Product.findById(item.productId);
        totalPrice += product.price * item.quantity;
        return { productId: product._id, quantity: item.quantity };
      })
    );

    const quote = new Quote({
      userId: req.user.id,
      products: quoteProducts,
      totalPrice,
      status: 'pending',
    });

    await quote.save();
    res.status(201).json(quote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find({ userId: req.user.id }).populate('products.productId');
    res.status(200).json(quotes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateQuote = async (req, res) => {
  try {
    const { quoteId } = req.params;
    const { status } = req.body;

    const quote = await Quote.findById(quoteId);
    if (!quote) {
      return res.status(404).json({ error: 'Quote not found' });
    }

    quote.status = status;
    await quote.save();

    res.status(200).json(quote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
