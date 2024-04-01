import React from 'react';

function VideoList({ videos }) {
  return (
    <div>
      {videos.map(video => (
        <div key={video.id}>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
          <div>
            <iframe className='videos'
              width="360"
              height="215"
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
