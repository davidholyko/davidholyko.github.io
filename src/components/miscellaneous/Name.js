import React from 'react';

class SvgElement {
  constructor({ element, strokeOffset, animation, timeoutOffset }) {
    this.element = element;
    this.strokeOffset = strokeOffset;
    this.animation = animation;
    this.timeoutOffset = timeoutOffset;
    this.dashOffsetMin = 9000;
    this.dashOffsetMax = 11000;
  }
}

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.curveRef = React.createRef();
    this.line1 = React.createRef(); // left vertical line in D
    this.line2 = React.createRef(); // top horizontal line in D
    this.line3 = React.createRef(); // bottom horitonzal line in D
    this.svgRefs = [
      new SvgElement({
        element: this.line1,
        strokeOffset: 10,
        timeoutOffset: 2500,
      }),
      new SvgElement({
        element: this.line2,
        strokeOffset: -10,
        timeoutOffset: 0,
      }),
      new SvgElement({
        element: this.line3,
        strokeOffset: 10,
        timeoutOffset: 1800,
      }),
      new SvgElement({
        element: this.curveRef,
        strokeOffset: -10,
        timeoutOffset: 590,
      }),
    ];

    this.state = {
      sharedStrokeDashArray: 100,
      sharedStrokeDashOffset: 10000,
      sharedStrokeWidth: '10px',
    };

    window.Name = this;
  }

  animate = (ref, index) => {
    const element = ref.element.current;
    const strokeOffset = ref.strokeOffset;
    const { dashOffsetMin: min, dashOffsetMax: max } = ref;
    const offset = element.getAttribute('stroke-dashoffset');

    console.log('!!! offset', offset, min, max);

    if (offset >= min && offset <= max) {
      element.setAttribute('stroke-dashoffset', +offset + strokeOffset);
    } else {
      element.setAttribute('stroke-dashoffset', 0);
      this.clearAnimation(index);
    }
  };

  componentDidMount = () => {
    this.svgRefs.forEach((ref, index) => {
      // if (index === 0) return;
      // if (index === 1) return;
      // if (index === 2) return;
      // if (index === 3) return;
      setTimeout(() => {
        // const animation = setInterval(() => this.animate(ref, index), 50);
        const animation = null;
        this.svgRefs[index].animation = animation;
      }, ref.timeoutOffset);
    });

    setTimeout(this.clearAnimations, 2000000);
  };

  componentWillMount() {
    this.clearAnimations();
  }

  clearAnimations = () => {
    this.svgRefs.forEach((_ref, index) => {
      this.clearAnimation(index);
    });
  };

  clearAnimation = (index) => {
    clearInterval(this.svgRefs[index].animation);
    this.svgRefs[index].animation = null;
  };

  render() {
    const {
      sharedStrokeDashOffset,
      sharedStrokeWidth,
      sharedStrokeDashArray,
    } = this.state;

    return (
      <div className="full-viewport">
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          width="500px"
          height="500px"
        >
          <path
            ref={this.line1}
            fill="none"
            d={`
                m 100, 50
                L 100, 450
                `}
            stroke="#00FF00"
            strokeWidth={sharedStrokeWidth}
            strokeDasharray={sharedStrokeDashArray}
            strokeDashoffset={sharedStrokeDashOffset}
          ></path>
          <path
            ref={this.line2}
            fill="none"
            d={`
                m 95, 50
                L 195, 50
                `}
            stroke="#00FF00"
            strokeWidth={sharedStrokeWidth}
            strokeDasharray={sharedStrokeDashArray}
            strokeDashoffset={sharedStrokeDashOffset}
          ></path>
          <path
            ref={this.line3}
            fill="none"
            d={`
                m 95, 450
                L 195, 450
                `}
            stroke="#00FF00"
            strokeWidth={sharedStrokeWidth}
            strokeDasharray={sharedStrokeDashArray}
            strokeDashoffset={sharedStrokeDashOffset}
          ></path>
          <path
            ref={this.curveRef}
            fill="none"
            d={`
                M 195, 50
                C 450, 50
                  450, 450
                  195, 450
                `}
            stroke="#00FF00"
            strokeWidth={sharedStrokeWidth}
            strokeDasharray={sharedStrokeDashArray}
            strokeDashoffset={sharedStrokeDashOffset}
          ></path>
        </svg>
      </div>
    );
  }
}

export default Name;
