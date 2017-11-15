import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'; //bootstrap (bundled)

import App from './App';

import firebase from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD6cAxpDZt0orcc2YnQKhfSMH34f-dgbTA",
    authDomain: "info343b-a17-demo.firebaseapp.com",
    databaseURL: "https://info343b-a17-demo.firebaseio.com",
    projectId: "info343b-a17-demo",
    storageBucket: "info343b-a17-demo.appspot.com",
    messagingSenderId: "828307407292"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
