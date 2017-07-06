const express = require('express');
const app = express();

// To use res.sendFile() we use path to link to the file
const path = require('path');
const _path = (path.join(__dirname));


app.get('/', function (req, res) {
  res.sendFile(_path + '/public/index.html');
});

app.get('/logo.png', function (req, res) {
  res.sendFile(_path + '/public/logo.png');
});

app.get('/style.css', function (req, res) {
  res.sendFile(_path + '/public/style.css');
});

app.get('/script.js', function (req, res) {
  res.sendFile(_path + '/public/script.js');
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
