var express = require('express');
var adminRounter =  express.Router();

adminRounter.get('/',function(req,res){
    res.render('admin/admin',{
        title:'ADMIN'
    });
});

module.exports = adminRounter;