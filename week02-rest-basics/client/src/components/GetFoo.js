/**
 * Created by bcuser on 4/24/17.
 */

import React, { Component } from 'react';
import '../css/App.css';

class GetFoo extends Component {

    constructor() {
        super();//always call first
        this.state = {
            foo: 'waiting for server'
        };
        this.quiet = true;
        this.debug('GetFoo constructor called');
    }

    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };

    getFoo = () => {
        console.log('GetFoo is called');

        const that = this;

        fetch('/api/foo')
            .then(function(response) {
                that.debug('GETONE-FETCH-ONE');
                return response.json();
            }).then(function(json) {
                that.debug('GETONE-FETCH-TWO');
                that.debug('parsed json', json);
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

                    <button className="getFoo" onClick={this.getFoo}>Get Foo</button>

                </div>
            );
    }

}


export default GetFoo;