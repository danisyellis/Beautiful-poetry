import React, { Component } from 'react';
import Name from '../Name';
import Credits from '../Credits';
import PoemCanvas from '../Poem-Canvas'
import BottomUtilityBar from '../Btm-Util-Bar';
import { Stage, Layer } from 'react-konva';

export default class Starter extends Component {
  render() {
    return (
    <div className="react-root">
      <Name />
      <Credits />
      <Stage width={700} height={700}>
        <Layer>
          <PoemCanvas />
        </Layer>
      </Stage>
      <BottomUtilityBar />
    </div>
    );
  }
}
