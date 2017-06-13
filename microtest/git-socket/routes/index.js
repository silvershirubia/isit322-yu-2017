var express = require('express');

var router = express.Router();

const requester = new require('request');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'git socket' });
});

router.get('/you-rang', function(request, response, next) {
    response.status(200).send({
        result: 'success from 30034',
        message: 'I am up and running git socket'

    });

});

router.get('/:id', function(request, response) {
    response.send({
        result: 'success from 30034',
        path: request.params.id

    });

});


module.exports = router;
