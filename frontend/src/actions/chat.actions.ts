import * as types from '../constants/chat.types';

export const getMessageListRequest = () => ({
    type: types.MESSAGES_LIST_REQUEST
});

export const getMessageListSuccess = ( messages ) => ({
    type: types.MESSAGES_LIST_SUCCESS,
    messages
});

export const getMessageListFailed = ( error ) => ({
    type: types.MESSAGES_LIST_FAILED,
    error
});

export const getActiveFriend = ( activeFriend: string ) => ({
    type: types.CHANGE_ACTIVE_FRIEND,
    activeFriend
});
