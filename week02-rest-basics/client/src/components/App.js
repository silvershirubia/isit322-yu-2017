import React, { Component } from 'react';
import '../css/App.css';
import 'whatwg-fetch';
//import mocks from './mocks';
//var fetch = require('../mocks').fetch;


class App extends Component {
    constructor(){
        super();//always call first
        this.state = {
            file: 'Get Nine Resultes will be placed here.'
        };

        this.quiet = true;
        this.debug('Bar called');
    }

    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };

    bar = () =>  {
        //this.setState({foo: '23'});

        const that = this;

        fetch('/api/foo')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
            that.debug('pased json', json);
            that.setState(foo => (json));
        }).catch(function (ex) {
            console.log('parsing failed', ex);
        });

    };



    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    state.file: {this.state.file}
                </p>
                <button onClick={this.bar}>click me</button>
            </div>
        );
    }
}

export default App;
