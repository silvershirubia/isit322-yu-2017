import React, { Component } from 'react';

import '../App.css';


class SmallNumbers extends Component {
    constructor(){
        super();//always call first
        this.state = {
            nine: '0',
            eight: '0',
            seven: '0',
            six: '0',
            five: '0',
            four: '0',
            three: '0',
            two: '0',
            one: '0'

        };
    }

    getNine = () => {
        this.setState({nine: '9'});
    };

    getEight = () => {
        this.setState({eight: '8'});
    };

    getSeven = () => {
        this.setState({seven: '7'});
    };

    getSix = () => {
        this.setState({six: '6'});
    };

    getFive = () => {
        this.setState({five: '5'});
    };

    getFour = () => {
        this.setState({four: '4'});
    };

    getThree = () => {
        this.setState({three: '3'});
    };

    getTwo = () => {
        this.setState({two: '2'});
    };

    getOne = () => {
        this.setState({one: '1'});
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    state.nine: {this.state.nine}
                </p>
                <p className="App-intro">
                    state.eight: {this.state.eight}
                </p>
                <p className="App-intro">
                    state.seven: {this.state.seven}
                </p>
                <p className="App-intro">
                    state.six: {this.state.six}
                </p>
                <p className="App-intro">
                    state.five: {this.state.five}
                </p>
                <p className="App-intro">
                    state.four: {this.state.four}
                </p>
                <p className="App-intro">
                    state.three: {this.state.three}
                </p>
                <p className="App-intro">
                    state.two: {this.state.two}
                </p>
                <p className="App-intro">
                    state.one: {this.state.one}
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

export default SmallNumbers;
