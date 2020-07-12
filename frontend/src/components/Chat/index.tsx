import React, { useEffect, useState } from "react";

import { useMessages } from "../../hooks/useMessages";

import { Message } from "./message.component";
import { MessageInputComponent } from "./message-input.component";

import './chat.scss';


export const Chat = () => {
    const [ messages, dispatchMessages ] = useMessages();

    return(
        <div className="messages-block">
            <div className="chat-block">
                { messages.map( ( message, i ) => <Message key={i} element={message} />) }
            </div>
            <MessageInputComponent/>
        </div>
    )
};
