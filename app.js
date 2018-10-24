var express = require('express');
var main = require('./routes/routes');
var path = require('path');
var app = express();
var debug  = require('debug');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use('/css',express.static('css'));

app.use('/',main);

app.listen(5000, function () {
    console.log('ready on port 5000');
});

