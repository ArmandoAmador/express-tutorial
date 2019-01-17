const express = require('express');
const app = express();

// Home Page
app.get('/', function(req, res) {
  res.send('Hello World');
});

// About Page
app.get('/about', function(req, res) {
  res.send('About Page');
})

// Blog Page
app.get('/blog', function(req, res) {
  res.send('Blog Page');
})

app.listen(3000, function() {
  console.log('Server is running at http://localhost:3000');
});
