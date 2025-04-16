import React, { useState } from 'react'
import LiveChat from './LiveChat';
import { useDispatch } from 'react-redux';
import { addMessage } from '../utils/chatSlice';

const ReplyToChat = () => {
    const [replyMessage, setReplyMessage] = useState('');
    const [showReplyButton, setShowReplyButton] = useState(false);
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSendClick();
    };
    const onSendClick = () => {
        console.log('Here in send click');
        dispatch(addMessage({name: 'Pallavi Dule', message: replyMessage}));
        setReplyMessage('');
    };

  return (
    <form className='flex' onSubmit={onFormSubmit}>
        <input 
            type='text' 
            className='bg-gray-100 rounded-3xl m-1.5 p-1 px-2 w-sm'
            placeholder='Chat...'
            value={replyMessage}
            onChange={(event) => setReplyMessage(event.target.value)}
            onFocus={() => setShowReplyButton(true)}
            onBlur={() => setShowReplyButton(false)}
        />
        {showReplyButton && 
            <button 
                className='px-2 m-1 hover:shadow shadow-gray-700 rounded-full items-center'
                onMouseDown={() => onSendClick()}
            >
                <img
                    width={20}
                    height={15}
                    alt='send icon'
                    src='data:image/png;base64,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'
                />
            </button>
        }
    </form>
  )
}

export default ReplyToChat;