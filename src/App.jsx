import YouTubeCard from './components/YoutubeCard';
import './App.css';

import { videos } from './data';

const App = () => {
  return (
    <div className='app'>
      <h1>Youtube</h1>
      <div className='cards-container'>
        {videos.map((video, index) => {
          const { title, description } = video;
          return (
            <YouTubeCard key={index} title={title} description={description} />
          );
        })}
      </div>
    </div>
  );
};
export default App;
