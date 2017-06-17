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
const address = '168.156.47.142';

let micro = [
    'http://localhost:30027'
];

router.get('/foo', function(request, response, next) {
    var message = {
        'result': 'server-success',
        'foo': 'server-bar yay via server',
        'file': 'server-api.js'
    };

    console.log('Foo called on server with message:', message);
    response.send(message);
});

router.get('/you-rang-qux', function(request, response, next){

    requester('https://qux-ms.herokuapp.com/you-rang').pipe(response);
    console.log('You calling from IP: ', address);
});

router.get('/you-rang-git', function(request, response, next){

    requester('http://' + address + ':30031/you-rang').pipe(response);
    console.log('You calling from IP: ', address);
});

router.get('/you-rang-gist', function(request, response, next){

    requester('http://' + address + ':30032/you-rang').pipe(response);
    console.log('You calling from IP: ', address);
});

router.get('/you-rang-markdown', function(request, response, next){

    requester('http://' + address + ':30033/you-rang').pipe(response);
    console.log('You calling from IP: ', address);
});

router.get('/you-rang-socket', function(request, response, next){

    requester('http://' + address + ':30034/you-rang').pipe(response);
    console.log('You calling from IP: ', address);
});

module.exports = router;
