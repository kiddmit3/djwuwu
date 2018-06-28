import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./Main";
import "./App.css";
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);
// registerServiceWorker();