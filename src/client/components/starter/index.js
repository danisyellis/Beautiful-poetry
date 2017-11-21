import React, { Component } from 'react';
import CreatePoem from '../create-poem';
import BottomUtilityBar from '../bottom-utility-bar';
import Credits from '../credits';
import Name from '../Name';

export default class Starter extends Component {
  render() {
    return (
    <div className="react-root">
      <Name />
      <Credits />
      <BottomUtilityBar />
    </div>
    );
  }
}
