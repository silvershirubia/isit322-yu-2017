import React, { Component } from 'react';

import '../css/App.css';
import {connect} from 'react-redux';

class SmallNumbers extends Component {
    constructor(props){
        super(props);//always call first

        this.getNine = this.getNine.bind(this);
        this.getEight = this.getEight.bind(this);
    }

    getNine = () => {
        this.props.dispatch({type: 'NUMBER_NINE'});
    };

    getEight = () => {
        this.props.dispatch({type: 'NUMBER_EIGHT'});
    };

    getSeven = () => {
        this.props.dispatch({type: 'NUMBER_SEVEN'});
    };

    getSix = () => {
        this.props.dispatch({type: 'NUMBER_SIX'});
    };

    getFive = () => {
        this.props.dispatch({type: 'NUMBER_FIVE'});
    };

    getFour = () => {
        this.props.dispatch({type: 'NUMBER_FOUR'});
    };

    getThree = () => {
        this.props.dispatch({type: 'NUMBER_THREE'});
    };

    getTwo = () => {
        this.props.dispatch({type: 'NUMBER_TWO'});
    };

    getOne = () => {
        this.props.dispatch({type: 'NUMBER_ONE'});
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    state.nine: {this.props.numbers.nine}
                </p>
                <p className="App-intro">
                    state.eight: {this.props.numbers.eight}
                </p>
                <p className="App-intro">
                    state.seven: {this.props.numbers.seven}
                </p>
                <p className="App-intro">
                    state.six: {this.props.numbers.six}
                </p>
                <p className="App-intro">
                    state.five: {this.props.numbers.five}
                </p>
                <p className="App-intro">
                    state.four: {this.props.numbers.four}
                </p>
                <p className="App-intro">
                    state.three: {this.props.numbers.three}
                </p>
                <p className="App-intro">
                    state.two: {this.props.numbers.two}
                </p>
                <p className="App-intro">
                    state.one: {this.props.numbers.one}
                </p>

                <button className='getNine' onClick={this.getNine}>Get Nine</button>
                <button className='getEight' onClick={this.getEight}>Get Eight</button>
                <button className='getSeven' onClick={this.getSeven}>Get Seven</button>
                <button className='getSix' onClick={this.getSix}>Get Six</button>
                <button className='getFive' onClick={this.getFive}>Get Five</button>
                <button className='getFour' onClick={this.getFour}>Get Four</button>
                <button className='getThree' onClick={this.getThree}>Get Three</button>
                <button className='getTwo' onClick={this.getTwo}>Get Two</button>
                <button className='getOne' onClick={this.getOne}>Get One</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        numbers: state.numbers
    };
};

SmallNumbers = connect(mapStateToProps)(SmallNumbers);

export default SmallNumbers;
