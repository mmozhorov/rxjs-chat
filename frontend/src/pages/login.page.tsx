import React from 'react';

import { map } from "rxjs/operators";

import UserService from "../api/user.service";

import { LoginForm } from "../components/Login";

export default class LoginPage extends React.Component {

    handleLogin = ( username, password ) => {
        const sub$ = UserService.login( username, password )
            .pipe(
                map(( response: any ) => response.data )
            )
            .subscribe(
            console.log,
            console.error,
            () => sub$.unsubscribe()
        )
    };

    render(){
        return(
            <LoginForm handleLogin={this.handleLogin} />
        );
    }
};
