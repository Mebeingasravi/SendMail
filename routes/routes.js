var express = require('express');
var main = express.Router();
var adminapp = require('./admin');
var user = require('./user');

main.use("/admin",adminapp);
main.use("/user",user);

main.get('/about', function (req, res) {
    //res.send('About Page');
    res.render('main/about');
});


main.get('/login', function (req, res) {
    res.send('About Page');
    //res.sendfile('./log.html');
});

main.get('/', function(req, res) {
    // res.send('hello, express!');
    dct = {title:'home'};
    res.render('main/index',dct);
});

module.exports = main;