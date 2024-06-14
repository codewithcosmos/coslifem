const Cart = require('../models/Cart');
const Product = require('../models/Product');

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id }).populate('products.productId');
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    let cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) {
      cart = new Cart({ userId: req.user.id, products: [] });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const productInCart = cart.products.find(p => p.productId.toString() === productId);
    if (productInCart) {
      productInCart.quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }

    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;

    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const productIndex = cart.products.findIndex(p => p._id.toString() === id);
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found in cart' });
    }

    cart.products.splice(productIndex, 1);
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    cart.products = [];
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
