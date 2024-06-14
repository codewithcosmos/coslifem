// Import Mongoose and any other necessary modules
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define your user schema and model using Mongoose
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// Hash password before saving to the database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error) {
    return next(error); // Pass error to the next middleware or error handler
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
