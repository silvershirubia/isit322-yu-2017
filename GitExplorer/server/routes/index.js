var express = require('express');
var router = express.Router();

const Logger = require('./elf-logger');
var logger = new Logger('routes-index');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  //res.render('index', { title: 'server' });
  res.sendFile('index.html');
});

router.get('/foo', function(request, response, next) {
    var message = {
        'result': 'success',
        'foo': 'bar',
        'file': 'api.js'
    };

    console.log('Foo called on server with message:', message);
    response.send(message);
});

module.exports = router;
