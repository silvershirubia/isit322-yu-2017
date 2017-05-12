import React, { Component } from 'react';

import logo from '../images/pk.svg';
import {
    Link
} from 'react-router-dom';
import '../css/App.css';
import '../css/menu.css';

class ElfHeader extends Component {

    render() {
        return (
            <div className="App">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/get-foo">BarFoo</Link></li>
                    <li><Link to="/show-new-gist">Show New Gist</Link></li>
                    <li><Link to="/get-numbers">Numbers</Link></li>
                </ul>

                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>


            </div>
        );
    }
}

export default ElfHeader;
