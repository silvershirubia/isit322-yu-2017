var express = require('express');

var router = express.Router();

const Logger = require('../routes/elf-logger');
const logger = new  Logger('test-api');


const requester = new require('request');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'micro-first' });
});

router.get('/you-rang', function(request, response, next) {
    response.status(200).send({
        result: 'success',
        message: 'I am up and running micro-first'

    });

});

router.get('/you', function(request, response, next) {
    response.status(200).send({
        result: 'success',
        message: 'I am up and running micro-first'

    });

});

router.get('/foo', function(request, response, next) {
    var message = {
        'result': 'success',
        'foo': 'bar',
        'file': 'api.js'
    };

    //logger.log('Foo called on server with message:', message);
    response.send(message);
});

module.exports = router;
