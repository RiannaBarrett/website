const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = new sqlite3.Database('./users.db');

// Create users table if not exists
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )
`);

app.post('/SignupForm', (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Insert user into the database
  const insert = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.run(insert, [name, email, password], function(err) {
    if (err) {
      console.error(err.message); // Log the error
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }
    res.status(201).json({ message: 'User signed up successfully' });
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
