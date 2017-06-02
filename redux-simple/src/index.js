import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import FakeRedux from './FakeRedux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import spokesman from './spokesman';

import AppNoProps from './AppNoProps';
import DispatchConnect from './DispatchConnect';
import AppConnect from './AppConnect';
import Connector from './Connector';

let store = createStore(spokesman);

ReactDOM.render(
    <div>
        <Provider store={store}>
            <div>
                <App store={store}/>
                <hr/><hr/>
                <AppNoProps />
                <hr/><hr/>
                <DispatchConnect/>

                <hr/><hr/>
                <Connector/>
                <hr/><hr/>
                <FakeRedux />
            </div>
        </Provider>

    </div>,
    document.getElementById('root'));
registerServiceWorker();
