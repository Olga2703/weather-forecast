import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import WebFont from 'webfontloader';
import './index.scss';

import App from './App';

const history = createBrowserHistory();

ReactDOM.render((
  <Router history={history}>
    <App />
  </Router>
), document.getElementById('root'));

WebFont.load({
    google: {
      families: ['Titillium Web:300,400,700', 'sans-serif']
    }
  });