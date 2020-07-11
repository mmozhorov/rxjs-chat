// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useFriends = () => {
    const friends = useSelector( state => state.friends.friends);
    const dispatch = useDispatch();
    return [ friends, dispatch ];
};
