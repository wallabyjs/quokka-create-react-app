import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const div = document.createElement('div');
ReactDOM.render(<App />, div);
div.getElementsByClassName('App')[0].innerHTML //?