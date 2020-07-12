import React from 'react';

export const Message = ( { element: { text, isOwn, time } } ) =>
    <div className={`chat-block__message ${ isOwn ? 'chat-block__message--own' : '' }`}>
        <span>
            {text}
            <span className='chat-block__message__time'>{time}</span>
        </span>
    </div>;
