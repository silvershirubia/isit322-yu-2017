var express = require('express');

var router = express.Router();

const requester = new require('request');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'micro-first' });
});

router.get('/you-rang', function(request, response, next) {
    response.status(200).send({
        result: 'success from 30026',
        message: 'I am up and running micro-first'

    });

});

router.get('/:id', function(request, response) {
    response.send({
        result: 'success from 30026',
        path: request.params.id

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
