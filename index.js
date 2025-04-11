const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let visitorCount = 0; // A simple in-memory counter

// API to fetch visitor count
app.get('/api/users', (req, res) => {
  res.json({ users: visitorCount });
});

// Increment counter on page load
app.get('/', (req, res) => {
  visitorCount++;
  res.send('<h1>Sludge Machine</h1><p>Thanks for visiting!</p>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
