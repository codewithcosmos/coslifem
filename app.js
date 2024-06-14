// app.js
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db'); // Import the connectDB function from db.js

const app = express();

// Call connectDB to establish MongoDB connection
connectDB()
  .then(() => {
    app.listen(5000, () => {
      console.log('Server running on port 5000');
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });
