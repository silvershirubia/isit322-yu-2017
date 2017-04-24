import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/index.css';
import Header from './components/Header';
import SmallNumbers from './components/SmallNumbers';
import GetFoo from './components/GetFoo';
import numbersInit from './numbers-data';

ReactDOM.render(
    <div>
        <Header />
        <App />
        <GetFoo />
        <SmallNumbers numbers={numbersInit} />

    </div>,
  document.getElementById('root')
);
