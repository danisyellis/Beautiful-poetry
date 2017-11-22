import React, { Component } from 'react';

export default class PoemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poemText: 'Temp poem here',
    };
  }

  render() {
    return (
      <div className="poem-canvas">{this.state.poemText}</div>
    );
  }
}
