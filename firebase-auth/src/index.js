import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'; //bootstrap (bundled)

import App from './App';

import firebase from 'firebase/app';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyDzkKUpGCuGaQSsEsiA3PmBCeEDkib2NnA",
  authDomain: "info343-firebase-demo.firebaseapp.com",
  databaseURL: "https://info343-firebase-demo.firebaseio.com",
  projectId: "info343-firebase-demo",
  storageBucket: "info343-firebase-demo.appspot.com",
  messagingSenderId: "389844547958"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
