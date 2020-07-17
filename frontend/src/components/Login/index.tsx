import React, {useState} from 'react';

import './loginForm.scss';

export const LoginForm = ({ handleLogin }) => {
    const [ username, changeUsername ] = useState('');
    const [ password, changePassword ] = useState('');

    return(
        <div className="login-form">
            <h1>Login</h1>
            <input type="text"
                   className="login-form__input"
                   onChange={({ target: { value } }) => changeUsername(value)}
                   placeholder="Username"
                   maxLength={30}
            />
            <input type="password"
                   className="login-form__input"
                   onChange={({ target: { value } }) => changePassword(value)}
                   placeholder="Password"
                   maxLength={30}
            />
            <button className="login-form__sign-in" onClick={() => handleLogin(username, password)}>Sign in</button>
            <p className="login-form__auth-link">Don't have an account? <span>Sign up here</span></p>
        </div>
    );
};
