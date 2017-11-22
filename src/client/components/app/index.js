import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Starter from '../Starter';

export default class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path="/" component={Starter} />
          </Switch>
      </div>
    );
  }
}
