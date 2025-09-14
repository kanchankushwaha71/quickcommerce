const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

// Create Express app
const app = express();

// Middleware setup
app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); // To parse JSON data
app.use(express.urlencoded({ extended: true })); // To parse URL encoded data

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/quick')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('Error connecting to MongoDB', err));

// Use auth routes9
app.use('/api/auth', authRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
