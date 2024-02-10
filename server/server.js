const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

// Your routes and other middleware...
const things = require('./things.js');
const api = require('./api/api.js');

app.use('/things', things);
app.use('/api', api);



// Define your routes
app.get('/', (req, res) => {
  res.send('<center><title>Express.js</title><h1>Hello World!</h1></center>');
});

app.get('/html', (req, res) => {
  res.sendFile(path.join(__dirname  ,   'index.html'))
});

app.get('/htm', (req, res) => {
  res.render("index")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
