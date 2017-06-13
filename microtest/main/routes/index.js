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

router.get('/micro-first/:id', function(request, response, next) {
    requester('http://localhost:30026/:id').pipe(response);
});

router.get('/micro-second', function(request, response, next) {
    requester('http://localhost:30027/you-rang').pipe(response);
});


// qux foo, bar, you-rang
router.get('/qux', function(request, response, next) {
    requester('http://localhost:30030').pipe(response);
});

router.get('/qux/bar', function(request, response, next) {
    requester('http://localhost:30030/bar').pipe(response);
});

router.get('/qux/you-rang', function(request, response, next) {
    requester('http://localhost:30030/you-rang').pipe(response);
});

router.get('/qux/foo', function(request, response, next) {
    requester('http://localhost:30030/foo').pipe(response);
});

// git-user you-rang, git-user
router.get('/git-user', function(request, response, next) {
    requester('http://localhost:30031').pipe(response);
});

router.get('/git-user/you-rang', function(request, response, next) {
    requester('http://localhost:30031/you-rang').pipe(response);
});

router.get('/git-user/git-user', function(request, response, next) {
    requester('http://localhost:30031/git-user').pipe(response);
});

// gist you-rang, create, delete, list
router.get('/gist', function(request, response, next) {
    requester('http://localhost:30032').pipe(response);
});

router.get('/gist/you-rang', function(request, response, next) {
    requester('http://localhost:30032/you-rang').pipe(response);
});

router.get('/gist/create', function(request, response, next) {
    requester('http://localhost:30032/create').pipe(response);
});

router.get('/gist/list', function(request, response, next) {
    requester('http://localhost:30032/list').pipe(response);
});

router.get('/gist/delete', function(request, response, next) {
    requester('http://localhost:30032/delete').pipe(response);
});

// markdown
router.get('/markdown', function(request, response, next) {
    requester('http://localhost:30033').pipe(response);
});

router.get('/markdown/you-rang', function(request, response, next) {
    requester('http://localhost:30033/you-rang').pipe(response);
});

// git-socket
router.get('/git-socket', function(request, response, next) {
    requester('http://localhost:30034').pipe(response);
});

router.get('/git-socket/you-rang', function(request, response, next) {
    requester('http://localhost:30034/you-rang').pipe(response);
});


module.exports = router;
