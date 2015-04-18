var path = require('path');
var express = require('express');

var app = express();

app.use('/', express.static(path.join(__dirname, '')));

app.get('/AMD', function(req, res) {
    res.sendFile(path.resolve('AMD.html'));
});

app.get('/UsingTraceur', function(req, res) {
    res.sendFile(path.resolve('UsingTraceur.html'));
});

module.exports = app;
