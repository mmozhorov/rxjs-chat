import React, { useEffect, useState } from "react";

import { useMessages } from "../../hooks/useMessages";

import { Message } from "./message.component";
import { MessageInputComponent } from "./message-input.component";

import './chat.scss';
import MessagesService from "../../api/messages.service";
import {map} from "rxjs/operators";


export const Chat = () => {
    const [ { messages, activeFriend }, dispatch ] = useMessages();

    const handleSendMessage = ( message: string ) => {
        const sub = MessagesService.postFriendMessage(activeFriend, message)
            .pipe(
                map(( data: any ) => console.log(data))
            )
            .subscribe(
                data => console.log(data),
                error => console.error(error),
        () => sub.unsubscribe()
            );
    };


    return(
        <div className="messages-block">
            <div className="chat-block">
                { messages.map( ( message, i ) => <Message key={i} element={message} />) }
            </div>
            <MessageInputComponent handleSendMessage={handleSendMessage}/>
        </div>
    )
};
