import React, { Component } from 'react';
import CreatePoem from '../create-poem';

export default class Footer extends Component {
  render() {
    return (
      <div className="utility-bar">
        <CreatePoem />
      </div>
    );
  }
};
