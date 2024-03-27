import React from 'react';

function VideoPlayer() {
  return (
    <div className="video-container" style={{ maxWidth: '50%', margin: 'auto', marginBottom: '30px' }}>
      <iframe 
        width="100%" 
        height="auto" 
        src="https://www.youtube.com/embed/IexRjppgjdE?controls=1" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
