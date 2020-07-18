import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { map } from "rxjs/operators";

import { LoginForm } from "../components/Login";

import UserService from "../api/user.service";

const LoginPage = () => {
    const [ isRedirect, changeRedirect ] = useState( !!localStorage.getItem('authToken') );
    const handleLogin = ( username, password ) => {
        const sub$ = UserService.login( username, password )
            .pipe( map( ( response: any ) => response.data ) )
            .subscribe(
                ( { token } ) => {
                    localStorage.setItem('authToken', token);
                    changeRedirect(true);
                },
                ( error ) => toast.error("Incorrect username or password"),
            () => sub$.unsubscribe()
        )
    };

    return(
        <React.Fragment>
            <LoginForm handleLogin={handleLogin} />
            { isRedirect ? <Redirect to='/messages'/> : null }
        </React.Fragment>
    );
};

export default LoginPage;
