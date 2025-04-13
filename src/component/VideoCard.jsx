import React from 'react';

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails, publishedAt} = snippet;
    const {viewCount} = statistics;

    const handleOnClick = () => {
        
    }
  return (
    <div 
        className='p-1 m-1'
        onClick={handleOnClick}>
        <div className='p-1'>
            <img 
                alt='thumbnail' 
                src={thumbnails.medium.url || thumbnails.default.url} 
                className='rounded-2xl w-[100%]'
            />
        </div>
        <div className='font-bold'>{title}</div>
        <div className='text-gray-500 text-sm'>{channelTitle}</div>
        <div className='text-gray-500 text-sm'>
            {viewCount/1000}K views ̣ {publishedAt}
        </div>
        {/* <div className='text-2xs'>{description}</div> */}
    </div>
  )
}

export default VideoCard