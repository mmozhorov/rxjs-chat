import { useSelector, useDispatch } from 'react-redux';

export const useMessages = () => {
    const messages = useSelector( state => state.chat.messages );

    const dispatch = useDispatch();
    return [ messages, dispatch ];
};
