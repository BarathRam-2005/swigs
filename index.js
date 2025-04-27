const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json()); // To parse JSON data
app.use(express.urlencoded({ extended: true })); // To parse form data (application/x-www-form-urlencoded)
app.use(cors()); // Enable CORS if needed

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define POST route to handle form submissions
app.post('/order', async (req, res) => {
  const {
    name,
    number,
    order,
    extra,
    quantity,
    datetime,
    address,
    message
  } = req.body;

  // Log the data received in the request body for debugging purposes
  console.log('Received order:', req.body);

  try {
    const newOrder = await pool.query(
      `INSERT INTO orders 
       (name, number, food_order, extra, quantity, datetime, address, message) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [name, number, order, extra, quantity, datetime, address, message]
    );

    res.json(newOrder.rows[0]);
  } catch (err) {
    // Print the error details for debugging purposes
    console.error('Error while inserting order:', err.message);
    res.status(500).send('Server Error');
  }
});

// Define GET route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Assuming index.html is in the same directory
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
