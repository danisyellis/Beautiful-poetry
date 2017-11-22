import React, { Component } from 'react';

class BottomUtilityBar extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleNewPoemClick = this.handleNewPoemClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
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
    const artist = new window.Konva.TextPath({ text: this.state.artist });
    const poem = new window.Konva.TextPath({ text: this.state.poem });
    const artistForm = document.querySelector('.artist-form');
    const poemForm = document.querySelector('.poem-form');
    artistForm.value = '';
    poemForm.value = '';
  }

  handleNewPoemClick(event) {
    const bottomBar = document.querySelector('.bottom-bar');
    const slidingForm = document.querySelector('.sliding-form');
    const closeBtn = document.querySelector('.close-btn');
    if (this.state.active) {
      return;
    }
    bottomBar.style.animation = 'slideupbar 5s';
    bottomBar.style.animationFillMode = 'forwards';
    slidingForm.style.animation = 'slideupform 5s';
    slidingForm.style.animationFillMode = 'forwards';
    closeBtn.style.display = 'inline';
    this.setState({
      active: true,
    });
  }

  handleCloseClick(event) {
    const bottomBar = document.querySelector('.bottom-bar');
    const slidingForm = document.querySelector('.sliding-form');
    const closeBtn = document.querySelector('.close-btn');
    bottomBar.style.animation = 'slidedownbar 2s';
    bottomBar.style.animationFillMode = 'forwards';
    slidingForm.style.animation = 'slidedownform 2s';
    slidingForm.style.animationFillMode = 'forwards';
    closeBtn.style.display = 'none';
    this.setState({
      active: false,
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
            <button className="close-btn" onClick={this.handleCloseClick}>X</button>
          </span>
        </div>
        <form className="sliding-form" onSubmit={this.handleSubmit}>
          <label>
            Artist Name:
            <input className="artist-form" name="artistName" onChange={this.handleInputChange} />
          </label>
          <label>
            Poem:
            <textarea className="poem-form" name="poemForm" placeholder="Write your poem here" onChange={this.handleTextAreaChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
     </div>
    );
  }
};

export default BottomUtilityBar;
