import React from 'react';

function VideoPlayer() {
  return (
    <div className="video-container" style={{ maxWidth: '100%', margin: 'auto', marginBottom: '20px', width: '100%', height: '450px' }}>
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/IexRjppgjdE?controls=1" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        style={{ width: '50%', height: '50%' }}
      ></iframe>
    </div>
  );
}

export default VideoPlayer;



