// const fs=require('fs');

//const files = fs.readdirSync('./');
//console.log(files);

// fs.readdir('$',function(err,files){
//     if(err) console.log('Error', err);
//     else console.log('Result',files);
// });

// const EventEmitter =require('events');
// const emitter=new EventEmitter();

// emitter.on('messageLogged',function(arg){
//     console.log('listerner called',arg);
// });

// emitter.emit('messageLogged',{id:1, url:'http://'});


/*const http=require('http');
const express = require('express');

const app=express();

app.get('/', function (req, res) {
    res.send('hello, express!');
});

const server = http.createServer();

server.on('connection',(socket)=>{
    console.log('New Connection...');
});



server.listen(3000);

console.log("Listening on port 3000...");*/



var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('hello, express!');
});

app.get('/about', function (req, res) {
    //res.send('About Page');
    res.sendfile('./about.html');
});

app.get('contact', function (req, res) {
    res.send('Contact Page');
});

app.listen(5500, function () {
    console.log('ready on port 5500');
});