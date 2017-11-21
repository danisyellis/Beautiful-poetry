import React, { Component } from 'react';

export default class CreatePoem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Write your poem here.',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('An essay was submitted: ' + this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.value} onChange={this.handleChange} />
      </form>
    );
  }
}
