import React, { Component } from 'react';
import View from '../view'
import Footer from '../footer';
import BottomButtons from '../bottom-buttons'
import Credits from '../credits';
import Name from '../Name';


export default class Starter extends Component {
  render() {
    return (
    <div className="react-root">
      <Name />
      <Credits />
      <View/>
      <Footer />
      <BottomButtons />
    </div>
    );
  }
}
