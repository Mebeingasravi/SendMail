var express = require('express');
var adminRounter =  express.Router();

adminRounter.get('/',function(req,res){
    res.send('<h1>hello admin</h1>');
});

module.exports = adminRounter;