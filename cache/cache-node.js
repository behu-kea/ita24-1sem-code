// index.js
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const NodeCache = require('node-cache');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1);
    }
    console.log('Connected to the MySQL database.');
});

// Configure NodeCache
const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 }); // Cache TTL of 100 seconds

// Endpoint to get all users
app.get('/users', (req, res) => {
    const cachedUsers = cache.get('users');

    if (cachedUsers) {
        console.log('Fetching users from cache');
        return res.json(cachedUsers);
    }

    console.log('Fetching users from database');
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        // Cache the results
        cache.set('users', results);

        res.json(results);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
