/**
 * Created by bcuser on 4/25/17.
 */

import React, { Component } from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import ElfHeader from './ElfHeader';
import fieldDefinitions from '../field-definitions';
import Logger from '../elf-logger';
const logger = new Logger('show-new-gist', 'blue', 'yellow', '24px');
import GetUserInfo from './GetUserInfo';
import SmallNumbers from './SmallNumbers';
import GetFoo from './GetFoo';
import numbersInit from '../numbers-data';
import ShowNewGist from './ShowNewGist';
import ShowMDGist from './ShowMDGist';

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
            gitUser: tempGitUser,
            gitGist:{
                url: 'url',
                created_at: 'date',
                description: 'desc',
                id: 'id',
                comments: 'comments'
            },
            gitMDGist: {
                filename: 'filename',
                type: 'type',
                raw_url: 'url',
                size: '0',
                content: 'stuff'
            }


        }

        this.fetchUser = this.fetchUser.bind(this);
        this.fetchGist = this.fetchGist.bind(this);
        this.fetchMDGist = this.fetchMDGist.bind(this);

        logger.log('DataMaven constructor called.')
         /*
        super();//always call first
        this.state = {
            gitUser: {}
        };

        this.quiet = true;
        this.debug('GetUserInfo constructor called');
    */
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


    fetchGist = (event) => {

        logger.log('Fetch fist called');
        const that = this;
        fetch('/api/gist-test')
            .then(function (response) {
                // YOU WRITE IT
                return response.json();
            }).then(function (json) {
            // DISPLAY WITH LOGGER AS NEEDED
            // PARSE THE JSON BODY INTO JS SINCE IT IS PROPABLY A STRING:

            logger.log('parsed json', json);
            const body = json.result;
            that.setState({
                gitGist: body
            });

        }).catch(function (ex) {
            // DISPLAY WITH LOGGER
            console.log('catch on dm gist');
        });
        event.preventDefault();
    };

    fetchMDGist = (event) => {

        logger.log('Fetch gist called');
        const that = this;
        fetch('/api/gist-second')
            .then(function (response) {
                // YOU WRITE IT
console.log('first');
                return response.json();

            }).then(function (json) {
            // DISPLAY WITH LOGGER AS NEEDED
            // PARSE THE JSON BODY INTO JS SINCE IT IS PROPABLY A STRING:
console.log("second" + json);
            logger.log('parsed json', json);
            const body = json.result;
            //let body = JSON.parse(json.result);
let test = JSON.stringify(body.files["file2.txt"]);
            console.log("here" + test);

            that.setState({
                gitMDGist: body.files["file2.txt"]
            });

        }).catch(function (ex) {
            // DISPLAY WITH LOGGER
            console.log('catch on mardown gist');
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
                <Route path='/show-new-gist'
                       render={(props) => (
                           <ShowNewGist {...props}
                               gitGist={this.state.gitGist}
                               fetchGist={this.fetchGist}
                           />
                       )}
                />
                <Route path='/show-sec-gist'
                       render={(props) => (
                           <ShowMDGist {...props}
                                        gitMDGist={this.state.gitMDGist}
                                        fetchMDGist={this.fetchMDGist}
                           />
                       )}
                />
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