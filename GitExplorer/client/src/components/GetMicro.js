/**
 * Created by bcuser on 4/24/17.
 */

import React, {Component} from 'react';
import '../css/App.css';

import {connect} from 'react-redux';


class GetMicro extends Component {

    constructor() {
        super();//always call first
        this.state = {
            result: 'start result',
            message: 'the message'
        };
    }
//
    render() {
        return (
            <div className="App">
                <h2>You Rang?</h2>
                <button className="getMicro" id="you-rang-qux" onClick={this.props.getMicro}>You Rang Qux</button>
                <button className="getMicro" id="you-rang-git" onClick={this.props.getMicro}>You Rang Git</button>
                <button className="getMicro" id="you-rang-gist" onClick={this.props.getMicro}>You Rang Gist</button>
                <button className="getMicro" id="you-rang-markdown" onClick={this.props.getMicro}>You Rang Markdown
                </button>
                <button className="getMicro" id="you-rang-socket" onClick={this.props.getMicro}>You Rang Git-Socket
                </button>

                <p className="App-intro">
                    state.result: {this.props.result}
                </p>
                <p className="App-intro">
                    state.message: {this.props.message}
                </p>

            </div>
        );
    }

}
//
const mapStateToProps = (state) => {
    return {
        result: state.getMicro.result,
        message: state.getMicro.message
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMicro: (event) => {
            let micUrl = event.target.id;

            fetch('/' + micUrl)
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                dispatch({
                    type: 'YOU-RANG',
                    getMicro: json
                });
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });

        }
    };
};
//
let GetMicroMap = connect(mapStateToProps, mapDispatchToProps)(GetMicro);

export default GetMicroMap;