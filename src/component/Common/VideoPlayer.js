import React from 'react';
import videos from '../../assets/simpolo video.mp4'

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <video className="responsive-video" controls playsInline>
        <source src={videos} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
