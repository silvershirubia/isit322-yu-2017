var express = require('express');
var router = express.Router();

const Logger = require('./elf-logger');
var logger = new Logger('routes-index');

const requester = new require('request');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  //res.render('index', { title: 'server' });
  res.sendFile('index.html');
});

const microIndex = 0;

let micro = [
    'http://localhost:30027'
];

router.get('/foo', function(request, response, next) {
    var message = {
        'result': 'server-success',
        'foo': 'server-bar',
        'file': 'server-api.js'
    };

    console.log('Foo called on server with message:', message);
    response.send(message);
});

router.get('/foo', function(request, response, next){
    requester('http://localhost:30026/foo').pipe(response);

});

module.exports = router;
