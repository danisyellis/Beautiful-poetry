import React, { Component } from 'react';
import Footer from '../footer';
import Name from '../Name';

export default class Starter extends Component {
  render() {
    return (
    <div className="hello-world">
      <Name />
      <h1>Hello World!</h1>
      <Footer />
    </div>
    );
  }
}
