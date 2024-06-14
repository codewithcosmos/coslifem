const express = require('express');
const connectDB = require('./db'); // Import connectDB function
const productRoutes = require('./routes/products');
const quoteRoutes = require('./routes/quotes');
const invoiceRoutes = require('./routes/invoices');
const authRoutes = require('./routes/auth');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
