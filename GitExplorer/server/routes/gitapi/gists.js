/**
 * Created by bcuser on 5/16/17.
 */

var express = require('express');
var router = express.Router();
var request = require('request');
var GitHub = require('github-api');

const Logger = require('../elf-logger');
const logger = new  Logger('gitapi-gists');
//const loggerDetails = new ();



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

router.get('/gist-second',function (request, response) {
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
//console.log("here");
        let createdGist = data;
        // console.log(data);

        return gist.read();

    }).then(function({data}) {

        let retrievedGist = data;
        console.log('Retrieve', retrievedGist);
        //console.log(data.files);
        response.status(200).send({'result': retrievedGist});
        // do interesting things
    }).catch(function (err) {
        response.status(500).send({'result': err});
    });

});

module.exports = router;