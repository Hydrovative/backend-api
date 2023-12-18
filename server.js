// Importing modules
const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const db = require('./models');
const plantRoutes = require('./routes/plantRoutes'); 

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection
db.sequelize.sync().then(() => {
  console.log('Database connected');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

// Routes
app.use('/plants', plantRoutes); 

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
