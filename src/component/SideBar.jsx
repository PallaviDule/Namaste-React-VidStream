import React from 'react';
import { useSelector } from 'react-redux';

const SideBar = () => {
    const {isMenuOpen} = useSelector((store) => store.app);

    return isMenuOpen ?    
    (<div className='col-span-1'>
            <h1>Home</h1>
            <h1>Shorts</h1>
            <h1 className='font-bold py-1'> Subscription</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Movies</li>
                <li>News</li>
            </ul>
            <h1 className='font-bold py-1'> Explore</h1>
            <ul>
                <li>Trending</li>
                <li>Music</li>
                <li>Movies & Live</li>
                <li>Live</li>
            </ul>
            <h1 className='font-bold py-1'> More From Youtube</h1>  
        </div> ):
        (<div>
            <h2>🏡</h2>
        </div>)
}

export default SideBar;