import React from 'react';
import Ajv from 'ajv';

import * as schemas from '../common/validation/users.schema';

import { LoginForm } from "../components/Login";

const ajv = new Ajv({ allErrors: true });

export default class LoginPage extends React.Component{
    private validateFunction: Ajv.ValidateFunction;

    handleLogin = ( username, password ) => {

    };

    constructor(props){
        super(props);

        this.validateFunction = ajv.compile(schemas.loginUserSchema);
    }

    render(){
        return(
            <LoginForm handleLogin={this.handleLogin} />
        );
    }
};
