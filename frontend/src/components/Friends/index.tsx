import React, {useEffect, useState} from "react";

import FriendsService from "../../api/friends.service";

import { getFriendsListRequest, getFriendsListFailed, getFriendsListSuccess } from "../../actions/friends.actions";

import { useFriends } from "../../hooks/useFriends";
import { useMessages } from "../../hooks/useMessages";

import './friendsList.css';
import MessagesService from "../../api/messages.service";
import {
    getMessageListFailed,
    getMessageListSuccess,
    getActiveFriend,
    getMessageListRequest
} from "../../actions/chat.actions";
import {map} from "rxjs/operators";

export const Friends = (  ) => {
    const [ activeFriend, setActiveFriend ] = useState('');
    const [ friends, dispatchFriends ] = useFriends();
    const [, dispatchMessages] = useMessages();

    const handleActiveFriend = ( name ) => {
        setActiveFriend(name);
    };

    useEffect(() => {
        dispatchFriends(getFriendsListRequest());

        const sub$ = FriendsService.getAllFriends('')
            .pipe(
                map( (data: any) => data.friends )
            )
            .subscribe(
            ( friends ) => dispatchFriends(getFriendsListSuccess(friends)),
            ( error ) => dispatchFriends(getFriendsListFailed(error)),
            () => sub$.unsubscribe()
        );
    }, []);

    useEffect(() => {
        dispatchMessages(getMessageListRequest());

        const sub = MessagesService.getFriendMessages(activeFriend)
            .pipe(
                map(( data: any ) => data.messages))
            .subscribe(
            messages => console.log(messages),
            error => console.log(error),
            () => {
                dispatchMessages(getActiveFriend(activeFriend));
                sub.unsubscribe();
            }
        )
    }, [activeFriend]);

    return(
        <div className="friends-block">
            {
                friends.map( ( friend, i ) =>
                    <div key={i}
                         onClick={ () => handleActiveFriend(friend.name)}
                         className={`friends-block__element ${activeFriend === friend.name ? 'friends-block__element--active' : ''}`}>
                        {friend.name}
                    </div>
                )
            }
        </div>
    )
}
