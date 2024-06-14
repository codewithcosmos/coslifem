const express = require('express');
const { getCart, addToCart, removeFromCart, clearCart } = require('../controllers/cartController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', protect, getCart);
router.post('/', protect, addToCart);
router.delete('/:id', protect, removeFromCart);
router.delete('/', protect, clearCart);

module.exports = router;
