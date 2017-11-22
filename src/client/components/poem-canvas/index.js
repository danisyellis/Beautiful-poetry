import React, { Component } from 'react';
import { Canvas } from 'react-konva';

export default class PoemCanvas extends Component {

  constructor(props) {
    super(props);
    this.loadCanvas = this.loadCanvas.bind(this);
  }

  loadCanvas() {
    // window.Konva is a global variable for Konva framework namespace
    this.setState({
      size: this.Konva.Canvas.setSize(1260, 600),
    });
  };

  render() {
    return (
        <Canvas width={1260} height={600} />
    );
  }
};
