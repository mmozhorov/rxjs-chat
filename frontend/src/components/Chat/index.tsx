import React, {useEffect, useState} from "react";

import MessagesService from "../../api/messages.service";

import './chat.css';


export const Chat = () => {
    const [ messages, useMessages ] = useState([]);

    useEffect(() => {
        const sub = MessagesService.getMessages(useMessages);
        return () => sub.unsubscribe()
    }, []);

    console.log(messages);

    return(
        <div className="chat-block">
        </div>
    )
}