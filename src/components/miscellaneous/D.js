import React from 'react';

// references
// https://css-tricks.com/svg-path-syntax-illustrated-guide/
// https://css-tricks.com/svg-line-animation-works/
// https://css-tricks.com/guide-svg-animations-smil/
// https://greensock.com/forums/topic/16899-draw-svg-starting-from-wrong-point/

class D extends React.Component {
  constructor(props) {
    super(props);
    this.pathRef = React.createRef();
  }

  render() {
    return (
      <div className="full-viewport">
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="500px"
          height="500px"
        >
          <path
            ref={this.pathRef}
            className="path"
            id="D"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2px"
            d={`
            M 7.5, 46
            v -42.5
            h 15
            c 2.88, 0
              5.509, 0.47
              7.89, 1.41
            c 2.38, 0.94
              4.425, 2.31
              6.135, 4.11
            s 3.04, 4
              3.99, 6.6
            c 0.95, 2.6
              1.425, 5.56
              1.425, 8.88
            c 0, 3.32 
              -0.476, 6.28 
              -1.425, 8.88
            c -0.95, 2.6
              -2.28, 4.8
              -3.99, 6.6
            s -3.755, 3.17
              -6.135, 4.11
            c -2.38, 0.94
              -5.01, 1.41
              -7.89, 1.41
            h -16`}
          />
        </svg>
      </div>
    );
  }
}

export default D;
