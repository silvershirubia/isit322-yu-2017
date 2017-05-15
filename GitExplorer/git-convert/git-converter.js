/**
 * Created by bcuser on 5/14/17.
 */

var debug = require('debug')('git-convert');
debug('this is a test');

var fs=require("fs");

function readFile(fileName) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fileName);
    });
}

readFile('git-user.json').then(function(text) {
    // CODE OMITTED. This is where you solve the core of the assignment.

    for (var property in json) {
        if (json.hasOwnProperty(property)) {
            // YOUR WORK HERE
        }
    }
    console.log('started');


});