import React from 'react';
import LatestVideo from '../Latest.mp4'; // Import statement for the video file

function VideoPlayer() {
  return (
    <div className="video-container" style={{ maxWidth: '50%', margin: 'auto', marginBottom: '30px' }}>
      <video controls style={{ width: '100%', height: 'auto' }}>
        <source src={LatestVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;
