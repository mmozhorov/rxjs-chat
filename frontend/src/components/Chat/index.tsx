import React, {useEffect, useState} from "react";
// import { useObservable } from "../../hooks/useObservable";
import MessagesService from "../../api/messages.service";
import { ajax } from 'rxjs/ajax';

export const Chat = () => {
    const [ messages, useMessages ] = useState([]);

    useEffect(() => {
        const sub = ajax.getJSON(`https://api.github.com/users?per_page=${10}`).subscribe( useMessages );
        return () => sub.unsubscribe()
    }, []);

    return(
        <div className="chat-block">
        </div>
    )
}