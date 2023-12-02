const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3306;

// Configure middleware
app.use(bodyParser.json());
app.use(cors());

// Create a MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mysql',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Define API routes for CRUD operations

// Start your server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Create a to-do
app.post('/api/todos', (req, res) => {
    const { task } = req.body;
    const query = 'INSERT INTO todos (task) VALUES (?)';
  
    db.query(query, [task], (err, result) => {
      if (err) {
        res.status(500).send('Error creating to-do');
      } else {
        res.status(201).send('To-do created');
      }
    });
  });
  
  // Read to-do list
  app.get('/api/todos', (req, res) => {
    const query = 'SELECT * FROM todos';
  
    db.query(query, (err, result) => {
      if (err) {
        res.status(500).send('Error fetching to-do list');
      } else {
        res.status(200).json(result);
      }
    });
  });
  
  // Implement update and delete routes similarly  