const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// To use res.sendFile() we use path to link to the file
const path = require('path');
const _path = (path.join(__dirname + '/public'));

// Set up use of Pug templates
app.set('views', (_path + '/views'));
app.set('view engine', 'pug');

// bodyParser will allow us to retrieve form input
app.use(bodyParser.urlencoded({ extended: true }));

// render static files
app.use(express.static(path.join(__dirname, "public")));

// Routers
app.get('/', function (req, res) {
  res.render('index');
});

// Handle post request and serve 'convert' template
app.post('/', function (req, res) {
  // save user provided data
  var curr_scale = req.body.scale_input;
  var temp = parseInt(req.body.spin_value);
  var s;
  var kelvins;

  // calculate temperature
  if (curr_scale == 'celcius') {
    s = '\u00b0C: ';
    kelvins = computeCelcius(temp);
  }

  if (curr_scale == 'fahrenheit') {
    s = '\u00b0F: ';
    kelvins = computeFahrenheit(temp);
  }

  if (curr_scale == 'rankine') {
    s = '\u00b0R: ';
    kelvins = computeRankine(temp);
  }

  // render convert template
  res.render('convert', {kelvins: kelvins, scale: s, temp: temp});
});

function computeCelcius(c_val) {
  var temp = c_val + 273.15;
  return temp.toFixed(2);
}

function computeFahrenheit(f_val) {
  var temp = (f_val + 459.67) * 5 / 9;
  return temp.toFixed(2);
}

function computeRankine(r_val) {
  var temp = r_val * 5 / 9;
  return temp.toFixed(2);
}

// Run locally on port 3000
app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
