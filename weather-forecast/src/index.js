import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import WebFont from 'webfontloader'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'));

WebFont.load({
    google: {
      families: ['Titillium Web:300,400,700', 'sans-serif']
    }
  });