import React, { Component } from 'react';
import Footer from '../footer';
import BottomButtons from '../bottom-buttons'
import Credits from '../credits';
import Name from '../Name';
import PoemCanvas from '../poem-canvas'


export default class Starter extends Component {
  render() {
    return (
    <div className="react-root">
      <Name />
      <Credits />
      <PoemCanvas />
      <BottomButtons />
      <Footer />
    </div>
    );
  }
}
