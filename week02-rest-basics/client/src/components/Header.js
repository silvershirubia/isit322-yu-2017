import React, { Component } from 'react';
import logo from '../pk.svg';
import '../App.css';


class Header extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
            </div>
        );
    }
}

export default Header;
