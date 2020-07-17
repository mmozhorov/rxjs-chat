import React from 'react';

import './loginForm.scss';

export const LoginForm = () => {
    return(
        <div className="login-form">
            <h1>Login</h1>
            <input className="login-form__input" type="text" placeholder="Username" maxLength={30} />
            <input className="login-form__input" type="password" placeholder="Password" maxLength={30} />
            <button className="login-form__sign-in">Sign in</button>
            <p className="login-form__auth-link">Don't have an account? <span>Sign up here</span></p>
        </div>
    );
};
