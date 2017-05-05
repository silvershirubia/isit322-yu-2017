import React, { Component } from 'react';

import GetUserInfo from './GetUserInfo';
import SmallNumbers from './SmallNumbers';
import GetFoo from './GetFoo';
import numbersInit from '../numbers-data';

import logo from '../images/pk.svg';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import '../css/App.css';
import '../css/menu.css';

class ElfHeader extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/get-foo">BarFoo</Link></li>
                        <li><Link to="/get-numbers">Numbers</Link></li>
                    </ul>

                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Welcome to React</h2>
                    </div>

                    <Route path="/" component={GetUserInfo}/>
                    <Route path="/get-foo" component={GetFoo}/>
                    <Route path="/get-numbers"
                           render={(props) => (
                               <SmallNumbers {...props}
                                numbers={numbersInit}/>
                           )}
                    />

                </div>
            </Router>
        );
    }
}

export default ElfHeader;
