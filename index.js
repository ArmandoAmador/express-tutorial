const path = require('path');
const express = require('express');
const app = express();

// Home Page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/pages/home.html'));
});

// About Page
app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname + '/pages/about.html'));
})

// Blog Page
app.get('/blog', function(req, res) {
  res.sendFile(path.join(__dirname + '/pages/blog.html'));
})

// 404 Page
app.use(function (req, res, next) {
  res.status(404);
  res.sendFile(path.join(__dirname + '/pages/missing.html'));
});

app.listen(3000, function() {
  console.log('Server is running at http://localhost:3000');
});
