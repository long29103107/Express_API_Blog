var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
require('dotenv').config();

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.listen(`${port}`);
