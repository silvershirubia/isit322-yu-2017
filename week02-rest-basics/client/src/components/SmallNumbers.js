import React, { Component } from 'react';

import '../App.css';


class SmallNumbers extends Component {
    constructor(){
        super();//always call first
        this.state = {
            nine: '0'

        };
    }

    getNine = () => {
        this.setState({nine: '9'});
    };

    render() {
        return (
            <div className="App">

                <p className="App-intro">
                    state.nine: {this.state.nine}
                </p>
                <button className='getNine' onClick={this.getNine}>Get Nine</button>
            </div>
        );
    }
}

export default SmallNumbers;
