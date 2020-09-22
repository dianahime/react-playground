import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact={true} activeClassName='is-active' to="/">Random Color</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='is-active' to="/characterCount">Character Count</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='is-active' to="/counter">Counter</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation