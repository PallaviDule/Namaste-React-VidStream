import React from 'react';

const Button = ({name}) => {
  return (
    <div>
        <button className='font-bold bg-gray-200 rounded-lg px-2 py-1 mx-2 hover:bg-gray-300'>{name}</button>
    </div>
  )
}

export default Button;