import * as types from '../constants/friends.types';

const initialState = {
    friends: [],
    isLoading: false,
    error: null
};

export default ( state = initialState, action: any ) => {
    switch (action.type) {
        case types.FRIENDS_LIST_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.FRIENDS_LIST_SUCCESS:
            return {
                ...state,
                friends: action.friends,
                isLoading: false
            }
        case types.FRIENDS_LIST_FAILED:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        default:
            return state;
    }
}
