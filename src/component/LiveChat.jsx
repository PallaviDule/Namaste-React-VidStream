import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { getRandomComments, getRandomName } from '../utils/getRandomName';
import ReplyToChat from './ReplyToChat';

const LiveChat = () => {
    const dispatch = useDispatch();
    const {messages} = useSelector((store) => store.chat);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(addMessage({
                name: getRandomName(),
                message: getRandomComments()
            }));
        }, 3000);

        return () => clearInterval(interval);
    });

  return (
    <div>
        <div className='p-3 mx-4 border border-gray-200 rounded-t-2xl w-auto h-[50px] '>Live Chat ⌄</div>
        <div className='px-4 mx-4 border border-gray-200 w-auto h-[400px] overflow-scroll flex flex-col-reverse'>
            {messages.map((chatMessage) => 
                <ChatMessage name={chatMessage.name} message={chatMessage.message}/>
            )}
        </div>
        <div className='px-4 mx-4 border border-gray-200 rounded-b-2xl w-auto h-[50px]'>
            <ReplyToChat/>
        </div>
    </div>
  )
}

export default LiveChat;
