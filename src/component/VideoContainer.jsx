import React, { useEffect } from 'react'
import { YOUTUBE_MOST_POPULAR_URL } from '../utils/constants';

const VideoContainer = () => {
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_URL);
    const response = await data.json();

    console.log('response:', response);
  };

  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer