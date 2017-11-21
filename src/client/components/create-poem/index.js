import React, { Component } from 'react';

export default class CreatePoem extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      artist: event.target.value,
    });
  }

  handleTextAreaChange(event) {
    this.setState({
      poem: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.artist);
    console.log(this.state.poem);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Artist Name:
          <input name="artistName" onChange={this.handleInputChange} />
        </label>
        <label>
          Poem:
          <textarea name="poemForm" placeholder="Write your poem here" onChange={this.handleTextAreaChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
