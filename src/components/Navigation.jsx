import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss';

const Navigation = () => {
    return (
        <nav className={style.module}>
            <ul>
                <li>
                    <NavLink exact={true} activeClassName={style.isActive} to="/">Random Color</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.isActive} to="/characterCount">Character Count</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.isActive} to="/counter">Counter</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={style.isActive} to="/colorPicker">Color Picker</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation