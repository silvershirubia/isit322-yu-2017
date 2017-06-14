import React, {Component} from 'react';
//import logo from '../images/pk.svg';

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

                        /* 1 */
                    </Nav>
                    /*
                    2
                    */
                </Navbar.Collapse>
            </Navbar>
        );



        return (
            <div>
                {navbarInstance}
            </div>
        );
         /* 1
         <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
         <MenuItem eventKey={3.1}>Action</MenuItem>
         <MenuItem eventKey={3.2}>Another action</MenuItem>
         <MenuItem eventKey={3.3}>Something else here</MenuItem>
         <MenuItem divider />
         <MenuItem eventKey={3.3}>Separated link</MenuItem>
         </NavDropdown>
         */

        /* 2
         <Nav pullRight>
         <NavItem eventKey={1} href="#">Link Right</NavItem>
         <NavItem eventKey={2} href="#">Link Right</NavItem>
         </Nav>


        return (
            <div className="App elfMenu">
                {navbarInstance}

                <Jumbotron>
                             <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </Jumbotron>

            </div>
        );
    */
    }
}

export default ElfHeader;
