import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import Header from './components/Header';
import SmallNumbers from './components/SmallNumbers';

ReactDOM.render(
    <div>
        <Header />
        <App />
        <SmallNumbers />
    </div>,
  document.getElementById('root')
);
