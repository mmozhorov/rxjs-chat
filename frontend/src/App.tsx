import React from 'react';

import {Chat} from "./components/Chat";
import {Friends} from "./components/Friends";


export const App = () =>
    <div className="app-container">
        <Chat/>
        <Friends/>
    </div>