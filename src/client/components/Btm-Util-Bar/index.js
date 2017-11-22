import React, { Component } from 'react';

class BottomUtilityBar extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleNewPoemClick = this.handleNewPoemClick.bind(this);
    this.state = {
      active: false,
    };
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

  handleNewPoemClick(event) {
    const bottomBar = document.querySelector('.bottom-bar');
    const slidingForm = document.querySelector('.sliding-form');
    const closeBtn = document.querySelector('.close-btn');
    if (this.state.active) {
      return;
    }
    bottomBar.style.animation = 'slideupbar 3s';
    bottomBar.style.animationFillMode = 'forwards';
    slidingForm.style.animation = 'slideupform 3s';
    slidingForm.style.animationFillMode = 'forwards';
    closeBtn.style.display = 'inline';
    this.setState({
      active: true,
    });
  }

  render() {
    return (
      <div className="menu-bar">
        <div className="bottom-bar">
          <span className="button-bar">
            <button onClick={this.handleNewPoemClick}>New Poem</button>
            <button>Play</button>
            <button>Save</button>
            <button className="close-btn">X</button>
          </span>
        </div>
        <form className="sliding-form" onSubmit={this.handleSubmit}>
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
     </div>
    );
  }
};

export default BottomUtilityBar;
