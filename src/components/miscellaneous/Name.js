import React from 'react';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.curveRef = React.createRef();
    this.line1 = React.createRef(); // left vertical line in D
    this.line2 = React.createRef(); // top horizontal line in D
    this.line3 = React.createRef(); // bottom horitonzal line in D
    this.svgRefs = [
      {
        element: this.line1,
        strokeOffset: -10,
        animation: null,
        timeoutOffset: 10000,
        dashOffsetMin: 0,
        dashOffsetMax: 20000,
      },
      {
        element: this.line2,
        strokeOffset: -10,
        animation: null,
        timeoutOffset: 5000,
        dashOffsetMin: 0,
        dashOffsetMax: 20000,
      },
      {
        element: this.line3,
        strokeOffset: -10,
        animation: null,
        timeoutOffset: 2000,
        dashOffsetMin: 0,
        dashOffsetMax: 20000,
      },
      {
        element: this.curveRef,
        strokeOffset: -10,
        animation: null,
        timeoutOffset: 950,
        dashOffsetMin: 0,
        dashOffsetMax: 20000,
      },
    ];

    this.state = {
      sharedStrokeDashOffset: 10000,
      sharedStrokeWidth: '10px',
    };
  }
  animate = (ref) => {
    const element = ref.element.current;
    const strokeOffset = ref.strokeOffset;
    const { dashOffsetMin: min, dashOffsetMax: max } = ref;
    const offset = element.getAttribute('stroke-dashoffset');

    if (offset >= min && offset <= max) {
      element.setAttribute('stroke-dashoffset', +offset + strokeOffset);
    }
  };

  componentDidMount = () => {
    this.svgRefs.forEach((ref, index) => {
      if (index === 0) return;
      // if (index === 1) return;
      if (index === 2) return;
      // if (index === 3) return;
      setTimeout(() => {
        this.svgRefs[index].animation = setInterval(
          () => this.animate(ref),
          50,
        );
      }, ref.timeoutOffset);
    });

    setTimeout(this.clearIntervals, 2000000);
  };

  componentWillMount() {
    this.clearIntervals();
  }

  clearIntervals = () => {
    this.svgRefs.forEach((_ref, index) => {
      clearInterval(this.svgRefs[index].animation);
      this.svgRefs[index].animation = null;
    });
  };

  render() {
    const { sharedStrokeDashOffset, sharedStrokeWidth } = this.state;
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
            strokeDasharray="500"
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
            strokeDasharray="500"
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
            strokeDasharray="500"
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
            strokeDasharray="500"
            strokeDashoffset={sharedStrokeDashOffset}
          ></path>
        </svg>
      </div>
    );
  }
}

export default Name;
