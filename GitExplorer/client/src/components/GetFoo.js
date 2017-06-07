/**
 * Created by bcuser on 4/24/17.
 */

import React, {Component} from 'react';
import '../css/App.css';

import {connect} from 'react-redux';


class GetFoo extends Component {

    constructor() {
        super();//always call first
        this.state = {
            foo: 'start foo',
            file: 'file start'
        };

    }

    render() {
        return (
            <div className="App">

                <p className="App-intro">
                    state.foo: {this.props.foo}
                </p>
                <p className="App-intro">
                    state.file: {this.props.file}
                </p>

                <button className="getFoo" onClick={this.props.getFoo}>Get Foo</button>

            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        foo: state.getFoo.foo,
        file: state.getFoo.file
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFoo: () => {
            fetch('/foo')
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                dispatch({
                    type: 'GETFOO',
                    getFoo: json
                });
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });

        }
    };
};

/*

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

 */

GetFoo = connect(mapStateToProps, mapDispatchToProps)(GetFoo);

export default GetFoo;