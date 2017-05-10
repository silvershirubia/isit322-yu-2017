/**
 * Created by bcuser on 4/11/17.
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

// for GitHub
router.get('/user', function(req, res, next) {
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

let getGitHub = function() {
    let gh;
    if (true) {
        gh = new GitHub({
            token: '728494e07b9a1b4f1d1e3a291ddeeec65e3cd2c5'
        });
    } else {
        gh = new GitHub({
            username: 'silvershirubia',
            password: ''
        });
    }
    return gh;
};

router.get('/gist-test',function (request, response) {
    // unauthenticated client

    const gh = getGitHub();
    let gist = gh.getGist(); // not a gist yet
    gist.create({
        public: true,
        description: 'My first gist',
        files: {
            "file1.txt": {
                content: "Aren't gists great!"
            }
        }
    }).then(function({data}) {
        // Promises!
        let createdGist = data;
        return gist.read();
    }).then(function({data}) {
        let retrievedGist = data;
        console.log('Retrieve', retrievedGist);
        response.status(200).send({'result': retrievedGist});
        // do interesting things
    }).catch(function (err) {
        response.status(500).send({'result': err});
    });

});


module.exports = router;
