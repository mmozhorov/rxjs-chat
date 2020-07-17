import React from 'react';
import Ajv from 'ajv';

import * as schemas from '../common/validation/users.schema';

import { LoginForm } from "../components/Login";

const ajv = new Ajv({ allErrors: true });

export default class LoginPage extends React.Component{
    handleLogin = ( username, password ) => {
        const validateFunction = ajv.compile(schemas.loginUserSchema);
        const isValid = validateFunction([{ username, password }]);
        console.log(validateFunction.errors);
    };

    render(){
        return(
            <LoginForm handleLogin={this.handleLogin} />
        );
    }
};
