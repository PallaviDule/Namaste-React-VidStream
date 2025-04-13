import React, { useEffect, useState } from 'react'
import { YOUTUBE_MOST_POPULAR_URL } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState('');
  
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_URL);
    const response = await data.json();

    setVideos(response.items);
  };

  return (
    <div className='grid grid-cols-4 m-1'>
      { videos.length && videos.map((info) =>
        <Link to={`/watch?v=${info.id}`} key={info.id}>
          <VideoCard info={info}/>
        </Link>
      )}
    </div>
  )
}

export default VideoContainer