var express = require('express');

var router = express.Router();

const requester = new require('request');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'Qux' });
});

router.get('/you-rang', function(request, response, next) {
    response.status(200).send({
        result: 'success from 30030',
        message: 'I am up and running from qux'

    });

});

router.get('/:id', function(request, response) {
    response.send({
        result: 'success from 30030',
        path: request.params.id

    });

});

router.get('/foo', function(request, response, next) {
    var message = {
        'result': 'success',
        'foo': 'bar',
        'file': 'api.js'
    };

    response.send(message);
});

router.get('/bar', function(request, response, next) {
    var message = {
        'result': 'success',
        'bar': 'for bar but maybe something was suppose to be here',
        'file': 'api.js'
    };

    response.status(200).send(message);
});

module.exports = router;
