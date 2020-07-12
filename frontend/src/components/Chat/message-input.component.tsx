import React, {useRef, useState} from 'react';

import { TextInput } from "./text-input.component";

import './message-input.scss';

const SendButton = () => {
    const [ isClicked, changeClickStatus ] = useState(false);
    const ArrowButton = () =>
        <svg width='20' height='20' viewBox='0 0 58 45' xmlns='http://www.w3.org/2000/svg'>
            <path fill='#fff' fillRule='nonzero' d='M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65'/>
        </svg>;

    return (
        <div onClick={() => changeClickStatus(!isClicked)}
             className={`message-input__send-button ${ isClicked ? 'message-input__send-button__circle' : ''}`}>
            <div className="container">
                <div className="tick">
                    { isClicked ? <ArrowButton/> : "Send" }
                </div>
            </div>
        </div>
    );
};

export const MessageInputComponent = ( ) => {
    const textInputRef = useRef(null);

    return(
        <div className="message-input">
            <TextInput textInputRef={textInputRef}/>
            <SendButton/>
        </div>
    );
};
