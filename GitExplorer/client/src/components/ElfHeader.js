import React, {Component} from 'react';
import logo from '../images/pk.svg';

//import {Jumbotron} from 'react-bootstrap';
import { Nav, Navbar, NavItem  } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import '../css/App.css';
import '../css/menu.css';

class ElfHeader extends Component {

    render() {
        const navbarInstance = (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to='/'><NavItem>Gist Explorer</NavItem></LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to='/'><NavItem>Show Git User</NavItem></LinkContainer>
                        <LinkContainer to='/get-gist-list'><NavItem>Get Gist List</NavItem></LinkContainer>
                        <LinkContainer to='/show-new-gist'><NavItem>Show New Gist</NavItem></LinkContainer>
                        <LinkContainer to='/show-sec-gist'><NavItem>Show Second Gist Info</NavItem></LinkContainer>
                        <LinkContainer to='/get-numbers'><NavItem>Get Numbers</NavItem></LinkContainer>
                        <LinkContainer to='/get-foo'><NavItem>Get Foo</NavItem></LinkContainer>
                        <LinkContainer to='/get-micro'><NavItem>Get Micro</NavItem></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );



        return (
            <div className="App">
                <img src={logo} className="App-logo" alt="logo"/>
                {navbarInstance}
            </div>
        );
    }
}

export default ElfHeader;
