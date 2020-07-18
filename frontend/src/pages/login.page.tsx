import React from 'react';

import { LoginForm } from "../components/Login";

export default class LoginPage extends React.Component {

    handleLogin = ( username, password ) => {

    };

    render(){
        return(
            <LoginForm handleLogin={this.handleLogin} />
        );
    }
};
