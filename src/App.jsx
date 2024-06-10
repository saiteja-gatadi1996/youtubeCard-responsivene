// src/App.js
import React from 'react';
import YouTubeCard from './components/YoutubeCard';
import './App.css';

const App = () => {
  const videos = [
    { title: 'Video 1', description: 'This is the description for video 1.' },
    { title: 'Video 2', description: 'This is the description for video 2.' },
    { title: 'Video 3', description: 'This is the description for video 3.' },
    { title: 'Video 4', description: 'This is the description for video 4.' },
    { title: 'Video 5', description: 'This is the description for video 5.' },
  ];

  return (
    <div className='app'>
      <h1>YouTube Cards</h1>
      <div className='cards-container'>
        {videos.map((video, index) => (
          <YouTubeCard
            key={index}
            title={video.title}
            description={video.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
