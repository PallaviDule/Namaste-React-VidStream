import React from 'react';
import Button from './Button';

const ButtonArrayList = ['All', 'Music', 'News', 'Game Shows', 'Indian Music', 'Game', 'Mixes', 'Podcasts', 'Recently Uploaded'];

const ButtonList = () => {
  return (
    <div className='flex p-1'>
      {ButtonArrayList.map((button) => 
        <Button name={button} key={button}/>
      )}
    </div>
  )
}

export default ButtonList