import React, { Component } from 'react';
import { Layer, Rect, Stage } from 'react-konva';

export default class PoemCanvas extends Component {


  render() {
    return (
      <div className="poem-canvas">
      
        <Rect
          x={10}
          y={10}
          width={500}
          height={500}
        />
      </div>
    );
  }
}





// export default class PoemCanvas extends Component {
//   componentDidMount() {
//     // log Konva.Circle instance
//     console.log(this.refs.PoemCanvas);
// }
// render() {
//     return (
//         <Canvas ref="PoemCanvas" width="600" height="600" fill="black"/>
//     );
// }
// }
