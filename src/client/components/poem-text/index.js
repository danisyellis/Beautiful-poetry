import React, { Component } from 'react';
import { Text } from 'react-konva';

export default class PoemText extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      text: 'Here is my text',
    };
  }

  handleChange(event) {
    this.setState({
      text: this.attrs.text,
    });
  };

  render() {
    return (
      <Text ref='poemText' width={1260} height={600} text={this.state.text}
      onrotationchange={this.handleChange} />
    );
  };
}
