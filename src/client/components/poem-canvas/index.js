import React, { Component } from 'react';
import { Rect, Group } from 'react-konva';

export default class PoemCanvas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: 'green',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // window.Konva is a global variable for Konva framework namespace
    this.setState({
      color: window.Konva.Util.getRandomColor(),
    });
  };

  render() {
    return (
        <Rect
          x={10}
          y={10}
          width={400}
          height={400}
          fill={this.state.color}
          onClick={this.handleClick}
        />
    );
  }
};
