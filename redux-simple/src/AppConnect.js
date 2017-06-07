import React, {} from 'react';
import './App.css';

let AppConnect = ({statement, kind, denyStatement, verifyStatement, noComment}) => {

    return (
        <div className="App">
            <div className="App-intro">
                <h2>Welcome to React App Connect</h2>
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
            <button onClick={denyStatement}>Deny</button>
            <button onClick={noComment}>No Comment</button>

        </div>
    );
};

export default AppConnect;
