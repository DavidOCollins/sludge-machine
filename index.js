const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let visitorCount = 0; // A simple in-memory counter

// Serve the main page with styled content and a button
app.get('/', (req, res) => {
  visitorCount++; // Increment counter when page loads
  res.send(`
    <html>
      <head>
        <title>Sludge Machine</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #e8f5e9;
            color: #388e3c;
            text-align: center;
            padding: 50px;
          }
          h1 {
            color: #388e3c;
            font-size: 3em;
          }
          p {
            font-size: 1.2em;
          }
          button {
            background-color: #388e3c;
            color: white;
            padding: 10px 20px;
            font-size: 1.2em;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          button:hover {
            background-color: #2c6e2d;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to the Sludge Machine!</h1>
        <p>This interactive art piece shows how the number of visitors impacts the flow of green sludge. The more visitors, the more sludge!</p>
        <p>Visitor count: ${visitorCount}</p>
        <button onclick="window.location.href='/'">Exit Session</button>
      </body>
    </html>
  `);
});

// API to fetch visitor count
app.get('/api/users', (req, res) => {
  res.json({ users: visitorCount });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
