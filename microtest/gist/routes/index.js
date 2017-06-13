var express = require('express');

var router = express.Router();

var request = require('request');
const requester = new require('request');

var GitHub = require('github-api');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'Gist' });
});

router.get('/you-rang', function(request, response, next) {
    response.status(200).send({
        result: 'success from 30032',
        message: 'I am up and running from gist'

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

router.get('/create', function(request, response) {
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
    }).catch(function(err) {
        response.status(500).send({'result': err});
    });

});

let delID = '';

router.get('/list', function(request, response) {

    const gh = getGitHub();
    let me = gh.getUser();

    me.listGists(
    ).then(function({data}) {
        //console.log('USER PROMISE', data);

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

        delID = results[0].id;
        response.status(200).send({
            'count': results.length,
            'result': results
        });
    }).catch(function(err) {
        console.log('USER Promise Rejected', err);
        response.status(500).send({'result': err});
    });

});


router.get('/delete', function(request, response) {

    // will delete the first gist

    const gh = getGitHub();
    let me = gh.getGist(delID);
    console.log( me);

    me.delete().then(function(data) {
        response.status(200).send({
            result: 'you deleted gist with id ' + delID
        });
    });

});


module.exports = router;
