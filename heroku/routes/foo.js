/**
 * Created by bcuser on 5/18/17.
 */

var express = require('express');
var router = express.Router();
var request = require('request');
var GitHub = require('github-api');

/* GET home page. */
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