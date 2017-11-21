import React, { Component } from 'react';
import Footer from '../footer';
import Name from '../Name';
import poemCanvas from '../poem-canvas';


export default class Starter extends Component {
  render() {
    return (
    <div className="hello-world">
      <Name />
      <h1>Hello World!</h1>
      <Footer/>
      <poemCanvas/>
    </div>
    );
  }
}