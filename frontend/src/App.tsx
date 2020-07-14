import React, { useEffect } from 'react';
import { createStore } from "redux";
import { Provider } from 'react-redux';

import reducer from './reducers';

import { Chat } from "./components/Chat";
import { Friends } from "./components/Friends";
import UserService from "./api/user.service";

const store = createStore(
    reducer,
);

export const App = () => {

    useEffect(() => {
        const token = localStorage.getItem('authToken') || '';
        UserService.login(token);
    }, []);

    return(
        <Provider store={store}>
            <div className="app-container">
                <Chat/>
                <Friends/>
            </div>
        </Provider>
    );
};
