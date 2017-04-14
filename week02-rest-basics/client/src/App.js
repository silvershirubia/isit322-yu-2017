import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
//import mocks from './mocks';
var fetch = require('./mocks').fetch;


class App extends Component {
    constructor(){
        super();//always call first
        this.state = {
            file: 'Get Nine Resultes will be placed here.',
            foo: 'waiting for server',
            nine: '0'

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

    getNine = () => {
        this.setState({nine: '9'});
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
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    state.foo: {this.state.foo}
                </p>
                <p className="App-intro">
                    state.file: {this.state.file}
                </p>
                <p className="App-intro">
                    state.nine: {this.state.nine}
                </p>
                <button className="getFoo" onClick={this.getFoo}>Get Foo</button>
                <button onClick={this.bar}>click me</button>
                <button className='getNine' onClick={this.getNine}>Get Nine</button>
            </div>
        );
    }
}

export default App;
