import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'; //bootstrap (bundled)
import './index.css'; //our css (bundled)

import App from './App';

import firebase from 'firebase/app';
import 'firebase/database';

// TODO: input your own firebase configuration

ReactDOM.render(<App />, document.getElementById('root'));
