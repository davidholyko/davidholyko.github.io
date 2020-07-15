import React, { Component } from 'react';

class Video extends Component {
  constructor() {
    super();

    this.state = {
      isPlaying: false,
    };
  }

  handleClick = () => {
    const { isPlaying } = this.state;

    if (!isPlaying) {
      this.play();
      this.setState({ isPlaying: !isPlaying });
    } else {
      this.pause();
      this.setState({ isPlaying: !isPlaying });
    }
  };

  play(event) {
    event.target.play();
  }
  pause(event) {
    event.target.pause();
  }

  render() {
    const { video } = this.props;
    return (
      <video
        className="mb-y"
        src={video}
        onClick={this.handleClick}
        controls
        loop
        preload="metadata"
      />
    );
  }
}

export default Video;
