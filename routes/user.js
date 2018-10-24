var express = require('express');
var userRoute = express.Router();

userRoute.get('/',(req,res)=>{
    res.send('<h1>Hello, user</h1>');

});

module.exports = userRoute;