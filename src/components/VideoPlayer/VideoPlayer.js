import React, { PureComponent } from 'react';
import Video from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {

  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  PlayVideo = () => {
    this.videoRef.current.play();
  }

  StopVideo = () => {
    this.videoRef.current.pause();
  }

  render() {
    return (
      <div className="video-player">
        <video ref={this.videoRef} src={Video} type="video/mp4" className="video-player__source"></video>
        <div className="video_nav">
          <button onClick={this.PlayVideo}>Play</button>
          <button onClick={this.StopVideo}>Stop</button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
