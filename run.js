const express = require('express');
const path = require('path');
const satellite = require("./src/satellite");
const iridium = require("./src/iridium");

const app = express();
const PORT = process.env.PORT || 3000;

// Run your satellite data fetching script once at startup
satellite.getTable({
  target: 25544,
  pages: 4,
  root: "./public/data/"
});

// Serve static data files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.send('<h1>🚀 Heavens Above Actions Deployed Successfully!</h1><p>Satellite data is being generated.</p>');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
