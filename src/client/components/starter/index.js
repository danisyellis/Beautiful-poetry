import React, { Component } from 'react';
import View from '../view'
import Footer from '../footer';
import Name from '../Name';
import Canvas from '../pixi-canvas';


export default class Starter extends Component {
  render() {
    return (
    <div className="hello-world">
      <Name />
      <h1>Hello World!</h1>
      <View/>
      <Footer/>
      <Canvas/>
    </div>
    );
  }
}