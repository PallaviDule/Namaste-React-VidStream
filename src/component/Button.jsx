import React from 'react';

const Button = ({name}) => {
  return (
    <div>
        <button className='text-sm font-bold bg-gray-100 rounded-lg px-2 py-1 mx-2 hover:bg-gray-200'>{name}</button>
    </div>
  )
}

export default Button;