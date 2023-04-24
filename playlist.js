import React from 'react';

const Playlist = () => {
  const videos = [
    { title: 'Video 1', url: 'https://www.youtube.com/watch?v=fACrXNaCQ7E' },
    { title: 'Video 2', url: 'https://www.youtube.com/watch?v=5qap5aO4i9A' },
    { title: 'Video 3', url: 'https://www.youtube.com/watch?v=PtVvUzGJmM0' },
  ];

  return (
    <div>
      <h2>My Playlist</h2>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>
            <a href={video.url}>{video.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
