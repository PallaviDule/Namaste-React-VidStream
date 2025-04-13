import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const {isMenuOpen} = useSelector((store) => store.app);
    const dispatch = useDispatch();

    const handleIconClick = () => {
        dispatch(toggleMenu());
    }

    return isMenuOpen ?    
    (<div className='col-span-1 px-1 m-1'>
            <h1><Link to='/'>🏡 Home</Link></h1>
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
            <h2 onClick={handleIconClick}>🏡</h2>
        </div>)
}

export default SideBar;