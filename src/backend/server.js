var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080

const buildpath = '/../../build/';

app.use(express.static(__dirname + buildpath));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + buildpath + '/index.html'));
});

app.listen(8080);