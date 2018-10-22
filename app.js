var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('hello, express!');
});

app.get('/about', function (req, res) {
    //res.send('About Page');
    res.sendfile('./about.html');
});

app.get('/about', function (req, res) {
    //res.send('About Page');
    res.sendfile('./contact.html');
});

app.get('/login', function (req, res) {
    //res.send('About Page');
    res.sendfile('./index.html');
    console.log('login page console')
});

app.get('/logout', function (req, res) {
    res.send('About Page');
    //res.sendfile('./log.html');
});


app.get('/sendmail',function(req,res){
    var helper = require('sendgrid').mail;
    var fromEmail = new helper.Email('support@apollovirtualoffice.us');
    var toEmail = new helper.Email('vinodkaradiya@gmail.com');
    var subject = 'Sending with SendGrid is Fun';
    var content = new helper.Content('text/plain', 'and easy to do anywhere, even with Node.js');
    var mail = new helper.Mail(fromEmail, subject, toEmail, content);
    process.env.SENDGRID_API_KEY="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";

    var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
    });
    
    sg.API(request, function (error, response) {
    if (error) {
        console.log('Error response received');
    }
    console.log(response.statusCode);
    console.log('a');
    console.log(response.body);
    console.log('b');
    console.log(response.headers);
    console.log('c');
    });
});

app.get('/send',function(req,res){
    const sgMail = require('@sendgrid/mail');
    // echo "export SENDGRID_API_KEY='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'" > sendgrid.env

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
    to: 'admin@apollovirtualoffice.us',
    from: 'ravinder@joblana.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg); 
});


app.listen(4000, function () {
    console.log('ready on port 4000');
});



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
