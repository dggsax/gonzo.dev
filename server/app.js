var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Establish PROJECT_ROOT
const PROJECT_ROOT = path.join(__dirname, '..')

// Serve the React files
app.use(express.static(path.join(PROJECT_ROOT, '/client/build')));

// Placeholder API endpoint lol
app.get('/api/howdy', (req, res) => {
    res.send('howdy howdy!')
})

// Handle react requests
app.get('*', (req, res) => {
    res.sendFile(path.join(PROJECT_ROOT, '/client/build/index.html'))
})

module.exports = app;
