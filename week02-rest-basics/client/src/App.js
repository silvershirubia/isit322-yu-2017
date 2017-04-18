import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
//import mocks from './mocks';
var fetch = require('./mocks').fetch;


class App extends Component {
    constructor(){
        super();//always call first
        this.state = {
            file: 'Get Nine Resultes will be placed here.',
            foo: 'waiting for server'

        };
    }

    bar = () =>  {
        //this.setState({foo: '23'});

        const that = this;

        fetch('/api/foo')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
            console.log('pased json', json);
            that.setState(foo => (json));
        }).catch(function (ex) {
            console.log('parsing failed', ex);
        });

    };

    getFoo = () => {
        console.log('GetFoo is called');

        const that = this;

        fetch(this, '/api/foo')
            .then(function(response) {
                console.log('got response');
                return response.json();
            }).then(function(json) {
            console.log('parsed json', json);
            that.setState(foo => (json));
        }).catch(function(ex) {
            console.log('elf parsing failed', ex);
        });
    };

    render() {
        return (
            <div className="App">

                <p className="App-intro">
                    state.foo: {this.state.foo}
                </p>
                <p className="App-intro">
                    state.file: {this.state.file}
                </p>

                <button className="getFoo" onClick={this.getFoo}>Get Foo</button>
                <button onClick={this.bar}>click me</button>
            </div>
        );
    }
}

export default App;
