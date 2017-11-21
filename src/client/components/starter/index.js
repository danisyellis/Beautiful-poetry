import React, { Component } from 'react';
import Footer from '../footer';
import Credits from '../credits';

export default class Starter extends Component {
  render() {
    return (
      <div className="hello-world">
        <Credits />
        <h1>Hello World!</h1>
        <Footer />
      </div>
    );
  }
}
