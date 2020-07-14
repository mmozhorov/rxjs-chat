import { useSelector, useDispatch } from 'react-redux';

export const useMessages = () => {
    const messages = useSelector( state => state.chat );
    const dispatch = useDispatch();

    return [ messages, dispatch ];
};
