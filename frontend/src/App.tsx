import React from 'react';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import reducer from './reducers';

import HomePage from './pages/home.page';
import LoginPage from './pages/login.page';

export const App = () =>
    <Provider store={ createStore( reducer ) }>
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Messages</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <div className="app-container">
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route exact path="/login">
                        <LoginPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    </Provider>;
