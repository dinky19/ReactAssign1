import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from './serviceWorker';
import Tab from './prac/a2';
import A1 from './prac/assignment1';

ReactDOM.render(
  <>
     <A1/>
    <Tab/>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
