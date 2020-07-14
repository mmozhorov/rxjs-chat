import React, {useState} from 'react';

export const TextInput = ({ textInputRef }) => {
    const [ text, changeText ] = useState('');

    const handleKeyPress = ( event ) => {
        const textInputHeight = ( textInputRef.current.scrollHeight - 8 ) + 'px';
        const textInputWrapperHeight = getComputedStyle(textInputRef.current).height;

        if (textInputWrapperHeight !== textInputHeight)
            textInputRef.current.style.height = textInputHeight;
    };

    return (
        <textarea ref={ textInputRef } onKeyUp={handleKeyPress}  className='message-input__text-input'>
            {text}
        </textarea>
    );
};
