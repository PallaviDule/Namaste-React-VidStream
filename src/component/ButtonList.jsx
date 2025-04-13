import React from 'react';
import Button from './Button';

const ButtonArrayList = ['All', 'Music', 'News', 'Game Shows', 'Indian Music', 'Game', 'Mixes', 'Podcasts', 'Recently Uploaded'];

const ButtonList = () => {
  return (
    <div className='flex'>
      {ButtonArrayList.map((button) => 
        <Button name={button}/>
      )}
    </div>
  )
}

export default ButtonList