import React, { useEffect } from "react";

import FriendsService from "../../api/friends.service";

import { useFriends } from "../../hooks/useFriends";

import './friendsList.css';
import {getFriendsListFailed, getFriendsListSuccess} from "../../actions/friends.actions";

export const Friends = (  ) => {
    const [ friends, dispatchFriends ] = useFriends();

    useEffect(() => {
        const sub = FriendsService.getAllFriends(
            ( friends ) => dispatchFriends(getFriendsListSuccess(friends)),
            ( error ) => dispatchFriends(getFriendsListFailed(error)),
            () => sub.unsubscribe()
        );
    }, []);

    return(
        <div className="friends-block">
            {friends.map( ( friend, i ) => <div key={i} className={``}>{friend.name}</div> )}
        </div>
    )
}
