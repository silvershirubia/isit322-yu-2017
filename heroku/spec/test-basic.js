/**
 * Created by charlie on 10/7/15.
 */


var request = require('supertest');
var app = require('../app');

const Logger = require('../routes/elf-logger');
const logger = new  Logger('test-basic');

describe('Elvenware Simple Plain Suite', function() {

    'use strict';

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('get the foo route', function(done) {
        request(app)
            .get('/api/foo')// is /api/foo until moved
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });

    it('checks the foo response', function(done) {
        request(app)
            .get('/api/foo')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                logger.log(response.body);
                expect(response.body.result).toBe('success');
                expect(response.body.foo).toBe('bar');
                expect(response.body.file).toBe('api.js');
                //expect(typeof response.body.result).toBe('object');
            })
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });

});