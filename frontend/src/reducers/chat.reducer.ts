import * as types from '../constants/chat.types';

const initialState = {
    messages: [],
    activeFriend: '',
    isLoading: false,
    error: null
};

export default ( state = initialState, action: any ) => {
    switch (action.type) {
        case types.MESSAGES_LIST_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case types.MESSAGES_LIST_SUCCESS:
            return {
                ...state,
                messages: action.messages,
                isLoading: false
            };
        case types.MESSAGES_LIST_FAILED:
            return {
                ...state,
                error: action.error,
                isLoading: false
            };
        case types.CHANGE_ACTIVE_FRIEND:
            return {
                ...state,
                activeFriend: action.activeFriend
            };
        default:
            return state;
    }
}
