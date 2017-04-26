/**
 * Created by bcuser on 4/25/17.
 */

import React, { Component } from 'react';
import '../css/App.css';
import 'whatwg-fetch';
//import mocks from './mocks';
//var fetch = require('../mocks').fetch;

class GetUserInfo extends Component {
    constructor(){
        super();//always call first
        this.state = {
            gitUser: {}
        };

        this.quiet = true;
        this.debug('GetUserInfo constructor called');
    }

    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };

    getUser = () => {

        const that = this;
        fetch('/api/user')
            .then(function (response) {
                // YOU WRITE IT
                return response.json();
            }).then(function (json) {
            // DISPLAY WITH LOGGER AS NEEDED
            // PARSE THE JSON BODY INTO JS SINCE IT IS PROPABLY A STRING:
                var body = JSON.parse(json.body);
                that.setState({
                    gitUser: body
                });
        }).catch(function (ex) {
            // DISPLAY WITH LOGGER
            console.log('catch');
        });
    };

    render() {
        return (
            <div className="App">

                <p className="App-intro">
                    Log In Name:
                    <input value={this.state.gitUser.login}/>
                </p>
                <p className="App-intro">
                    Avatar Url:
                    <input value={this.state.gitUser.avatar_url}/>
                </p>
                <p className="App-intro">
                    Url:
                    <input value={this.state.gitUser.url}/>
                </p>
                <p className="App-intro">
                    Html Url:
                    <input value={this.state.gitUser.html_url}/>
                </p>
                <p className="App-intro">
                    Followers Url:
                    <input value={this.state.gitUser.following_url}/>
                </p>

                <button id="getUser" onClick={this.getUser} >Get User</button>
            </div>//last
        );
    }
}

export default GetUserInfo;