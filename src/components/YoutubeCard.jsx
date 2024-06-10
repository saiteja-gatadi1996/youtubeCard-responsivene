import '../components/YouTubeCard.css';

const YoutubeCard = ({ title, description }) => {
  return (
    <div className='youtubeCard'>
      <div className='thumbnail'></div>
      <div className='content'>
        <h3 className='title'>{title}</h3>
        <p className='description'>{description}</p>
      </div>
    </div>
  );
};
export default YoutubeCard;
