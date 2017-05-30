var express = require('express');
var router = express.Router();
const requester = require('request');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'main' });
});

router.get('/micro-first', function(request, response, next) {
    requester('http://localhost:30026/you-rang').pipe(response);
});

router.get('/micro-first', function(request, response, next) {
    requester('http://localhost:30026/foo').pipe(response);
});

router.get('/micro-second', function(request, response, next) {
    requester('http://localhost:30027/you-rang').pipe(response);
});

module.exports = router;
