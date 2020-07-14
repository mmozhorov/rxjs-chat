import React from 'react';
import { createStore } from "redux";
import { Provider } from 'react-redux';

import reducer from './reducers';

import { Chat } from "./components/Chat";
import { Friends } from "./components/Friends";

export const App = () =>
    <Provider store={ createStore( reducer ) }>
        <div className="app-container">
            <Chat/>
            <Friends/>
        </div>
    </Provider>;
