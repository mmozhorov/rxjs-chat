import * as types from '../constants/friends.types';

export const getFriendsListRequest = () => ({
    type: types.FRIENDS_LIST_REQUEST
});

export const getFriendsListSuccess = ( friends ) => ({
    type: types.FRIENDS_LIST_SUCCESS,
    friends
});

export const getFriendsListFailed = ( error ) => ({
    type: types.FRIENDS_LIST_FAILED,
    error
});