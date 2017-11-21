import React, { Component } from 'react';
import Name from '../Name';
import Credits from '../Credits';
import PoemCanvas from '../Poem-Canvas'
import BottomUtilityBar from '../Btm-Util-Bar';

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
