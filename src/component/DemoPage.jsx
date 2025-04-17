import React, { useState } from 'react'

const DemoPage = () => {
    const [text, setText] = useState('');
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    console.log('Rendering when value changes:', text, isDarkTheme);
  return (
    <div className={`border w-100 h-100 m-1 ${isDarkTheme ? 'bg-black text-white' : ''}`}>
        <input 
            className='border border-gray-100 bg-gray-100 p-1 m-1'
            type='text' 
            value={text} 
            onChange={(event) => setText(event.target.value)}/>
        <button onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle Theme</button>
    </div>
  )
}

export default DemoPage;