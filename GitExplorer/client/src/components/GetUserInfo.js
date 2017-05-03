/**
 * Created by bcuser on 4/25/17.
 */

import React, { Component } from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import ShowUserInfo from './ShowUserInfo';
import fieldDefinitions from '../field-definitions';
import Debug from '../elf-logger';
const logger = new Debug(false);

class GetUserInfo extends Component {
    constructor(){
        super();

        const tempGitUser = {};
        for (let value of fieldDefinitions) {
            tempGitUser[value.id] = value.sample;
        }
        this.state = {
            gitUser: tempGitUser
        };

        /*
        logger.log('GetUserInfo constructor called.')

        super();//always call first
        this.state = {
            gitUser: {}
        };

        this.quiet = true;
        this.debug('GetUserInfo constructor called');
    */
    }
/*
    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };
*/
    fetchUser = (event) => {

        const that = this;
        fetch('/api/user')
            .then(function (response) {
                // YOU WRITE IT
                return response.json();
            }).then(function (json) {
            // DISPLAY WITH LOGGER AS NEEDED
            // PARSE THE JSON BODY INTO JS SINCE IT IS PROPABLY A STRING:

            logger.log('parsed json', json);
            var body = JSON.parse(json.body);
            that.setState({
                gitUser: body
            });
            /*
                var body = JSON.parse(json.body);
                that.setState({
                    gitUser: body
                });
                */

        }).catch(function (ex) {
            // DISPLAY WITH LOGGER
            console.log('catch');
        });
        event.preventDefault();
    };

    render() {
        return (
            <div className="App">

                <ShowUserInfo
                    fields={fieldDefinitions}
                    gitUser={this.state.gitUser}
                    onChange={this.fetchUser}
                />


            </div>//last
        );
    }
}

export default GetUserInfo;