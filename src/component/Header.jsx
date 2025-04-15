/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './Header.css';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { SEARCH_SUGGESTION_URL } from '../utils/constants';
import useYouTubeSuggest from '../utils/useYouTubeSuggest';

const Header = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    const toggleMenuHeader = () => {
        dispatch(toggleMenu());
    };

    const { suggestions, loading, error } = useYouTubeSuggest(searchQuery);

    return (
    <div className='headerContainer p-2 m-2 bg-white'>
        <div className='firstBlock'>
            <img 
                className='h-8 p-1 mx-1'
                alt='menu' 
                src='https://img.icons8.com/?size=48&id=83195&format=png'
                onClick={() => toggleMenuHeader()}
                // src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADy8vKDg4M3Nzc+Pj6Ghob19fU5OTkzMzPS0tIVFRW1tbVzc3Ph4eGLi4t7e3tNTU27u7tmZmacnJxbW1vBwcFFRUVUVFSioqLp6emsrKxhYWGSkpLg4ODHx8fU98TiAAAB5UlEQVR4nO3da1IiMRQGUGZoukFAFLV96/53qU3N/JvSVEJ505lzVnC/SkI6VB6LBQAAAAAAAAAAAMBPG37XaDhTustD96tW3eGyPOBVdIpvXBXmG+ptv7+6ss66iq4/waok4Gt09Ule8wMO0bUnyu+nz9GlJ3rOTvgSXXqil+yE6+jSE62zE26iS0+0yU54HV16ouvshMvo0hMtsxNeRJee6CI74Sw+aco+aubRiAVNOI85P3++PzlG1/+tY1nAxeLpJjrCl26eSgN+Gna3/bJG/e3uXH9kAAAAAAAAAAD8lPf+btXVaHXXv58h33EbvWXmS9viDUO1HygpPlKyj64/QVHEXXT1SXYFCaNrT5QfcIwuPdGYnXAOo3CSPxLnsQm6ZBt0++ct7qNLT3SfnXAu43CfnbD939L258P/4JtmFiMxfxSeNL+2+Oyola8Pi7roH+P+YR29nP+n9cO+4FcUAAAAAAAAACDEMD5Wevfl43iOuy+bv7+0/jtoC7fUNH+PcPt3Qdf/Bsuka70JSxrxEF16okN2wvb36rd/3qL9MzPtvzMzh/l+kj/nt//eU/tvds3jPaT8t5AmQ/0TxqZ0jVj7qZnCEzOTt77eMyXb/q084Enb75ACAAAAAAAAAAAApPsAtcs1XnQo7SwAAAAASUVORK5CYII='/>
            />
            <img 
                className='h-8 p-1 mx-1'
                alt='youtube-icon' 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png'/>
        </div>
        <div className='col-span-10'>
            <div className='col-span-10 flex'>
                <input className='border-1 border-gray-400 rounded-l-3xl px-4 w-120 h-10'
                    type='text' 
                    placeholder='🔍  Search' 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={()=> setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                />
                <button className='border-1 border-gray-400 rounded-r-3xl w-20 h-10'>🔍</button>
                <img 
                className='h-10 p-2'
                alt='voice-icon' 
                src='data:image/jpeg;base64,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'/>
            </div>
            {(suggestions.length > 0 && searchQuery && showSuggestions)&& 
                <div className='fixed my-2 mx-1  border border-gray-100 rounded-2xl col-span-10 p-2 w-120 bg-white shadow-md shadow-gray-400'>
                    <ul>
                        {suggestions.map((suggestion) => 
                            <li className='hover:bg-gray-100' key={suggestion}> 🔍 
                                <span className='p-2 m-1'>{suggestion}</span>
                            </li>
                        )}
                    </ul>
                </div>
            }
        </div>
        <div className='flex col-span-1'>
            <button className='bg-gray-200 rounded-2xl w-20 px-2'>＋Create</button>
            <img 
                className='h-8'
                alt='bell-icon' 
                src='data:image/png;base64,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'/>
            <div>
                <img 
                    className='h-8'
                    alt='user-icon' 
                    src='data:image/png;base64,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'/>
            </div>
        </div>
    </div>
  )
}

export default Header;