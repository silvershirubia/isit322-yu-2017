import React, {} from 'react';
import './App.css';

import {connect} from 'react-redux';

let DispatchConnect = ({dispatch, statement, kind}) => {

    const verifyStatement = () => {
        dispatch({type: 'VERIFY'});
    };

    const denyEverything = () => {
        dispatch({type: 'DENY'});
    };

    const noComment = () => {
        dispatch({type: 'NO COMMENT'});
    };


    return (
        <div className="App">
            <div className="App-intro">
                <h2>Welcome to React Dispatch Connect</h2>
            </div>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>

            <h1>Political Science Props Redux</h1>

            <p>This component does not use redux. It uses something redux-like.</p>
            <p>{statement}</p>
            <p>{kind}</p>
            <hr />
            <button onClick={verifyStatement}>Verify</button>
            <button onClick={denyEverything}>Deny</button>
            <button onClick={noComment}>No Comment</button>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        statement: state.statement,
        kind: state.kind
    };
};

DispatchConnect = connect(mapStateToProps)(DispatchConnect);
export default DispatchConnect;
