import { combineReducers } from "redux";
import chat from './chat.reducer';
import friends from './friends.reducer';

export default combineReducers({
    chat,
    friends
});