/**
 * Created by bcuser on 4/25/17.
 */

import React, { Component } from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import ShowUserInfo from './ShowUserInfo';

class GetUserInfo extends Component {
    /*
    constructor(){
        super();

        const tempGitUser = {};
        for (let value of fieldDefinitions) {
            tempGitUser[value.id] = value.sample;
        }
        this.state = {
            gitUser: tempGitUser
        };

    }

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
            let body = JSON.parse(json.body);
            that.setState({
                gitUser: body
            });

        }).catch(function (ex) {
            // DISPLAY WITH LOGGER
            console.log('catch on gui.js');
        });
        event.preventDefault();
    };
*/
    render() {
        return (
            <div className="App">

                <ShowUserInfo
                    fields={this.props.fields}
                    gitUser={this.props.gitUser}
                    onChange={this.props.onChange}
                />


            </div>//last
        );
    }
}

export default GetUserInfo;