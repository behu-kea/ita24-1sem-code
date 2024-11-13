// index.js
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// Route with short-term cache (10 seconds)
app.get('/cache-short', (req, res) => {
    res.set('Cache-Control', 'public, max-age=10'); // 10 seconds
    res.json({ message: 'This response is cached for 10 seconds', timestamp: new Date() });
});

// Route with long-term cache (1 hour)
app.get('/cache-long', (req, res) => {
    res.set('Cache-Control', 'public, max-age=3600'); // 1 hour
    res.json({ message: 'This response is cached for 1 hour', timestamp: new Date() });
});

// Route with no-cache
app.get('/no-cache', (req, res) => {
    res.set('Cache-Control', 'no-cache'); // Force revalidation on every request
    res.json({ message: 'This response should not be cached', timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
