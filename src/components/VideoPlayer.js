import React from 'react';

function VideoPlayer() {
  return (
    <div className="video-container" style={{ maxWidth: '80%', margin: 'auto', marginBottom: '30px' }}>
      <iframe 
        width="100%" 
        height="auto" 
        src="https://www.youtube.com/embed/IexRjppgjdE?controls=1" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        style={{ width: '100%', height: '100%' }}
      ></iframe>
    </div>
  );
}

export default VideoPlayer;

