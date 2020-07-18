import React from 'react';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import reducer from './reducers';

import HomePage from './pages/home.page';
import LoginPage from './pages/login.page';

import { Header } from "./components/Header";

import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Router>
    </Provider>;
