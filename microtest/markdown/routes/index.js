var express = require('express');

var router = express.Router();

const requester = new require('request');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'Markdown' });
});

router.get('/you-rang', function(request, response, next) {
    response.status(200).send({
        result: 'success from 30033',
        message: 'I am up and running markdown'

    });

});

router.get('/:id', function(request, response) {
    response.send({
        result: 'success from 30033',
        path: request.params.id

    });

});


module.exports = router;
