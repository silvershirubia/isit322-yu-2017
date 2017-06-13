var express = require('express');

var router = express.Router();

var request = require('request');
const requester = new require('request');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'Git User' });
});

router.get('/you-rang', function(request, response, next) {
    response.status(200).send({
        result: 'success from 30031',
        message: 'I am up and running from git user'

    });

});

router.get('/git-user', function(req, res, next) {
    var options = {
        url: 'https://api.github.com/users/silvershirubia',
        headers: {
            'User-Agent': 'request'
        }
    };

    request(options, function(error, response, body) {
        // Print the error if one occurred
        console.log('error:', error);
        // Print the response status code if a response was received
        console.log('statusCode:', response && response.statusCode);
        // Print the HTML for the Google homepage.
        console.log('body:', body);
        res.send({error: error, response: response, body: body});
    });

});

module.exports = router;
