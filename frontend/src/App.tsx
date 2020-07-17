import React from 'react';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import reducer from './reducers';

import HomePage from './pages/home.page';
import LoginPage from './pages/login.page';

import { Header } from "./components/Header";

export const App = () =>
    <Provider store={ createStore( reducer ) }>
        <Router>
            <Header/>
            <div className="app-container">
                <Switch>
                    <Route exact path="/dialogs">
                        <HomePage/>
                    </Route>
                    <Route exact path="/login">
                        <LoginPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    </Provider>;
