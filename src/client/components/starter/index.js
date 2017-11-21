import React, { Component } from 'react';
import BottomUtilityBar from '../bottom-utility-bar';
import Credits from '../credits';
import Name from '../Name';
import PoemCanvas from '../poem-canvas'

export default class Starter extends Component {
  render() {
    return (
    <div className="react-root">
      <Name />
      <Credits />
      <PoemCanvas />
      <BottomUtilityBar />
    </div>
    );
  }
}
