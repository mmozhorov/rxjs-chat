import React from 'react';
import { Link } from "react-router-dom";

import noUserLogo from './no_user.svg';
import './header.scss';

export const Header = () =>
    <nav>
        <ul className="navigation-bar">
            <li className="navigation-bar__link">
                <Link to="/">Messages</Link>
            </li>
            <li className="navigation-bar__link">
                <Link to="/login">
                    <img src={noUserLogo} className="navigation-bar__link__user-logo" alt="Auth Link" />
                </Link>
            </li>
        </ul>
    </nav>;
