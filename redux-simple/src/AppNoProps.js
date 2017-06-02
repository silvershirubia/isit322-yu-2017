import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';

class AppNoProps extends Component {

    verifyStatement = () => {
        this.props.dispatch({ type: 'VERIFY' });
    };

    denyEverything = () => {
        this.props.dispatch({ type: 'DENY' });
    };

    noComment = () => {
        this.props.dispatch({ type: 'NO COMMENT' });
    };

  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <h2>Welcome to React no props</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <h1>Political Science Props Redux</h1>

          <p>This component does not use redux. It uses something redux-like.</p>
          {this.props.statement}
          <hr />
          <button onClick={this.verifyStatement}>Verify</button>
          <button onClick={this.denyEverything}>Deny</button>
          <button onClick={this.noComment}>No Comment</button>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        statement: state.statement
    };
};

AppNoProps = connect(mapStateToProps)(AppNoProps);
export default AppNoProps;
