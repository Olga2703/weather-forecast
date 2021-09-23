import React, { Component } from "react";

import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Home from "./components/Home/Home";
import City from "./components/City/City";
import List from "./components/List/List";
import Information from "./components/Information/Information";

// import './App.scss';

class App extends Component {
  render() {
    const { history } = this.props;

    return (
      <div className='App'>
        <Switch>
          <Route history={history} path='/home/' component={Home} />
          <Route history={history} path='/moscow' component={City} />
          <Route history={history} path='/list' component={List} />
          <Route
            history={history}
            path='/information'
            component={Information}
          />
          <Redirect from='/' to='/home/' />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
