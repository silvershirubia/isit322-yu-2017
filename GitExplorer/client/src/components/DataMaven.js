/**
 * Created by bcuser on 4/25/17.
 */

import React, { Component } from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import ElfHeader from './ElfHeader';
import fieldDefinitions from '../field-definitions';
import Debug from '../elf-logger';
const logger = new Debug(false);

import GetUserInfo from './GetUserInfo';
import SmallNumbers from './SmallNumbers';
import GetFoo from './GetFoo';
import numbersInit from '../numbers-data';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class DataMaven extends Component {
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

    fetchGist = (event) => {

        const that = this;
        fetch('/api/gist-test')
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
        <Router>
            <div>
                <ElfHeader/>
                <Route exact path='/'
                       render={(props) => (
                           <GetUserInfo {...props}
                                        fields={fieldDefinitions}
                                        gitUser={this.state.gitUser}
                                        onChange={this.fetchUser}
                           />
                       )}
                />


                <Route path='/get-foo' component={GetFoo}/>
                <Route path='/get-numbers'
                       render={(props) => (
                           <SmallNumbers {...props}
                                         numbers={numbersInit}/>
                       )}
                />
            </div>
        </Router>
        );
    }
}

export default DataMaven;