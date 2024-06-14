// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Correctly import the User model

// Example route for user registration
router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const newUser = new User({ username, password, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
