import React, {useEffect, useRef, useState} from 'react';
import Ajv from 'ajv';

import * as schemas from '../../common/validation/users.schema';

import './loginForm.scss';


export const LoginForm = ({ handleLogin }) => {
    const usernameRef: any = useRef<HTMLInputElement>(null);
    const passwordRef: any = useRef<HTMLInputElement>(null);

    const [ isDisabledSubmit, changeDisableStatus ] = useState(true);

    const validateFunction = new Ajv({ allErrors: true }).compile(schemas.loginUserSchema);

    const validateFields = () => {
        // @ts-ignore
        const username = usernameRef.current.value;
        // @ts-ignore
        const password = passwordRef.current.value;

        const isValid = validateFunction([{ username, password }]);

        if (isValid)
            changeDisableStatus(false);
        else
            changeDisableStatus(true);
    };

    useEffect(() => {
        validateFields();
    }, []);

    return(
        <div className="login-form">
            <h1>Login</h1>
            <input type="text"
                   className="login-form__input"
                   ref={usernameRef}
                   onBlur={validateFields}
                   placeholder="Username"
                   maxLength={30}
            />
            <input type="password"
                   className="login-form__input"
                   ref={passwordRef}
                   onBlur={validateFields}
                   placeholder="Password"
                   maxLength={30}
            />
            <button
                {...isDisabledSubmit ? 'disabled' : ''}
                className={`login-form__sign-in ${isDisabledSubmit ? 'login-form__sign-in--disabled' : ''}`}
                onClick={() => handleLogin(usernameRef.current.value, passwordRef.current.value)}>
                Sign in
            </button>

            <p className="login-form__auth-link">Don't have an account? <span>Sign up here</span></p>
        </div>
    );
};
