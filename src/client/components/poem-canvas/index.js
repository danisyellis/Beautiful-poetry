import React, { Component } from 'react';
import { Text, TextPath, Layer } from 'react-konva';

export default class PoemCanvas extends Component {

  renderKonva(container) {
    // var stage = new Konva.Stage({
    //   container: container,
    //   width: 100,
    //   height: 100
    // });
   

    var poem = new Konva.Text({
      fontFamily: "Arvo",
      fontSize: 24,
      text: "Don't Sweat The Technique - Eric B. & Rakim",
      align: "center",
      wrap: "word",
      fill: "black"
    })
  }

  
  render() {
    return (
      <Layer>
          {/* ref={ref => this.renderKonva(ref)}
          className={css(styles.container)} */}
          <Text
           fontFamily= {"Arvo"}
           fontSize= {24}
           text= {"Don't Sweat The Technique - Eric B. & Rakim"}
           align= {"center"}
           wrap= {"word"}
           fill= {"black"}
           />

      </ Layer>
    )
  }




}