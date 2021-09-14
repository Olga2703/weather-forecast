import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";

import Home from './components/Home/Home';
import City from './components/City/City';

// import './App.scss';

class App extends Component {
  render() {
    const { history } = this.props;

    return (
      <div className="App">
        <Switch>
          <Route history={history} path='/home' component={Home} />
          <Route history={history} path='/city' component={City} />
          <Redirect from='/' to='/home' />
        </Switch>        
      </div>
    );
  }
}

export default withRouter(App);