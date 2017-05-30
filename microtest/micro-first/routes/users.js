var express = require('express');

var request = require('request');
var router = express.Router();

var GitHub = require('github-api');

const Logger = require('../routes/elf-logger');
const logger = new  Logger('test-api');


/* GET users listing. */
router.get('/', function(req, res, next) { 'use strict';
  res.send('respond with a resource');
});


// for GitHub
router.get('/user/get-user', function(req, res, next) {
    var options = {
        url: 'https://api.github.com/users/silvershirubia',
        headers: {
            'User-Agent': 'request'
        }
    };

    request(options, function(error, response, body) {
        // Print the error if one occurred
        logger.log('error:', error);
        // Print the response status code if a response was received
        logger.log('statusCode:', response && response.statusCode);
        // Print the HTML for the Google homepage.
        logger.log('body:', body);
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

router.get('/gist-test', function(request, response) {
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
        logger.log('Retrieve', retrievedGist);
        response.status(200).send({'result': retrievedGist});
        // do interesting things
    }).catch(function(err) {
        response.status(500).send({'result': err});
    });

});

router.get('/gist-second', function(request, response) {
    // unauthenticated client

    const gh = getGitHub();
    let gist = gh.getGist(); // not a gist yet
    gist.create({
        public: true,
        description: 'My second gist',
        files: {
            "file2.txt": {
                content: "Aren't additional gists great!"
            }
        }
    }).then(function({data}) {
        // Promises!
//logger.log("here");
        let createdGist = data;
        // logger.log(data);

        return gist.read();

    }).then(function({data}) {

        let retrievedGist = data;
        logger.log('Retrieve', retrievedGist);
        //logger.log(data.files);
        response.status(200).send({'result': retrievedGist});
        // do interesting things
    }).catch(function(err) {
        response.status(500).send({'result': err});
    });

});

router.get('/get-gist-list', function(request, response) {

    const gh = getGitHub();
    let me = gh.getUser();
    logger.log('ME', me);

    me.listGists(
    ).then(function({data}) {
        logger.log('USER PROMISE', data);
        const results = data.map((gist) => (
                {
                    //Return Object with 4 props
                    "url": gist.url,
                    "htmlUrl": gist.html_url,
                    "id": gist.id,
                    "description": gist.description,
                    "gitPullUrl": gist.git_pull_url,
                    "ownerLogin": gist.owner.login,
                    "avatarUrl": gist.owner.avatar_url
                }
            ));

        response.status(200).send({
            'count': results.length,
            'result': results
        });
    }).catch(function(err) {
        logger.log('USER Promise Rejected', err);
        response.status(500).send({'result': err});
    });

});

module.exports = router;
