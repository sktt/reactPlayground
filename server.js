'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = module.exports = express();

var indexHtml = require('fs').readFileSync('./client/index.html', {encoding: 'utf8'});
indexHtml = indexHtml
  .replace(/\{HEAD\}/,
    '<script src="http://localhost:8090/webpack-dev-server.js"></script>')
  .replace(/\{BODY\}/,
    '<script src="http://localhost:8090/bundle.js"' +
    ' type="text/javascript" charset="utf-8"></script>');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./client/public'));

// no serverside rendering here O:::
app.get('/*', function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send(indexHtml);
});

app.listen(3000);
