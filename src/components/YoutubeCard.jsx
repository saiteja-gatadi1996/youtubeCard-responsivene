import React from 'react';
import './YouTubeCard.css';

const YouTubeCard = ({ title, description }) => {
  return (
    <div className='youtube-card'>
      <div className='thumbnail'></div>
      <div className='content'>
        <h3 className='title'>{title}</h3>
        <p className='description'>{description}</p>
      </div>
    </div>
  );
};

export default YouTubeCard;
