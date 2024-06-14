const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');

// Register route
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });
  newUser.save()
    .then(() => res.json({ success: true }))
    .catch(err => res.status(500).json({ success: false, message: err.message }));
});

// Login route
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ success: true, message: 'Login successful' });
});

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.json({ success: true, message: 'Logout successful' });
});

module.exports = router;
