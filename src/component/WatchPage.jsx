import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import { VIDEO_DETAILS_BY_ID } from '../utils/constants';

const VideoDetails = ({details}) => {
    const {snippet, statistics} = details;
    return (
        <div>
        <div className='font-bold text-lg'>{snippet.title}</div>
        <div className='font-bold'>{snippet.channelTitle}</div>
        <div className='text-gray-500 text-sm'>
            {statistics.viewCount/1000}K views ̣ {statistics.publishedAt}
        </div>
    </div>
    )
}

const WatchPage = () => {
    const [searchParam] = useSearchParams();
    const [videoDetails, setVideoDetails] = useState('');
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(closeMenu());
        fetchVideoDetails();
    }, []);

    const fetchVideoDetails = async () => {
        const data = await fetch(VIDEO_DETAILS_BY_ID + searchParam.get('v'));
        const result = await data.json();

        setVideoDetails(result?.items[0]);
    }

    return (
        <div className='col-span-11'>
            <iframe 
                className='rounded-2xl'
                width="800" 
                height="500" 
                src={`https://www.youtube.com/embed/${searchParam.get('v')}?si=FMEVFn76fzz9HKIx`}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
            </iframe>
            { videoDetails && <VideoDetails details={videoDetails}/>}
        </div>
    )
}

export default WatchPage;