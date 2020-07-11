import React from 'react';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.pathRef = React.createRef();

    this.state = {
      sharedStrokeWidth: '10px',
    };

    window.Name = this;
  }

  render() {
    const { sharedStrokeWidth } = this.state;

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
            id="letter-D"
            className="path"
            ref={this.pathRef}
            fill="none"
            d={`
                M 95, 50
                L 195, 50
                M 195, 50
                C 450, 50
                  450, 450
                  195, 450
                M 95, 450
                L 195, 450
                M 100, 50
                L 100, 450
                `}
            stroke="#00FF00"
            strokeWidth={sharedStrokeWidth}
          ></path>
        </svg>
      </div>
    );
  }
}

export default Name;
