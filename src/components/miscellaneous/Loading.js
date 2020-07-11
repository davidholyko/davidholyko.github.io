import React from 'react';

const COLORS = ['#00CC33', '#00FF88', '#000FFF', '#387239'];
const MAX_TIME_ELAPSED = 10000; // 10 seconds

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animation: () => {},
      colorPointer: 0,
      timerInterval: 50, // 50 milliseconds
      timerText: '0',
      totalTimeElapsed: 0,
      angle: 0,
    };

    this.circleRef = React.createRef();
    this.timerTextRef = React.createRef();

    window.circleRef = this.circleRef;
    window.timerTextRef = this.timerTextRef;

    window.Loading = this;
  }

  animate = () => {
    const { angle, colorPointer, totalTimeElapsed, animation } = this.state;
    const angleIncrement = 6;

    // math trick 2 * pi * 57 = 358, must be less than 360 degree

    this.timerTextRef.current.innerHTML = parseInt((angle / 360) * 100);

    if (this.timerTextRef.current.innerHTML >= 100) {
      this.circleRef.current.setAttribute('stroke-dasharray', `${0}, 10000`);

      if (totalTimeElapsed < MAX_TIME_ELAPSED) {
        clearInterval(animation);
        this.setState({
          colorPointer: (colorPointer + 1) % COLORS.length,
          totalTimeElapsed: totalTimeElapsed + 8000,
          angle: 0,
        });
      }
    } else {
      this.circleRef.current.setAttribute(
        'stroke-dasharray',
        `${angle + 20}, 366`,
      );
      this.setState({ angle: angle + angleIncrement });
    }

    console.log('!!! angle', angle);
  };

  componentDidMount() {
    console.log('!!! componentDidMount');

    const { timerInterval } = this.state;
    const animation = setInterval(this.animate, timerInterval);

    this.setState({ animation });
  }

  componentWillUnmount() {
    clearInterval(this.state.animation);
  }

  render() {
    console.log('!!! render');
    return (
      <div className="full-viewport">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
          style={{ width: 500, height: 500, top: 250, left: 250 }}
        >
          <circle
            cx="100"
            cy="100"
            r="60"
            id="colored-halo"
            fill="none"
            stroke={COLORS[this.state.colorPointer]}
            strokeWidth="10"
            strokeDasharray="0,10000"
            transform="rotate(-90,100,100)"
            ref={this.circleRef}
          />
          <text
            id="timer-text"
            textAnchor="middle"
            x="100"
            y="110"
            style={{ fontSize: '36px' }}
            ref={this.timerTextRef}
          >
            0%
          </text>
        </svg>
      </div>
    );
  }
}

export default Loading;
