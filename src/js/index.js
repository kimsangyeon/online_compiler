import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Sidebar from './components/Sidebar';

const elRoot = document.getElementById('root');
const elWrapper = document.getElementById('wrapper');
ReactDOM.render(<App />, elRoot);
ReactDOM.render(<Sidebar />, elWrapper);