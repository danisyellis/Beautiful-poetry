import React, { Component } from 'react';
import { Text, TextPath, Layer } from 'react-konva';

export default class PoemCanvas extends Component {

  renderKonva(container) {

    var stage = new Konva.Stage({
      container: container,
      width: 650,
      height: 300
    });
   
    var layer = new Konva.Layer();

    var poem = new Konva.Text({
      x: stage.getWidth() / 2,
      y: 15,
      fontFamily: "Arvo",
      fontSize: 24,
      text: "Don't Sweat The Technique - Eric B. & Rakim",
      align: "center",
      wrap: "word",
      fill: "navy",
      visible: true
    });
    layer.add(poem)
    stage.add(layer)
  }

  
  render() {
    return (
      <div className="poem-canvas">
          
      </div>
    )
  }

}