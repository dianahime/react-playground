import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Random Color</Link>
                </li>
                <li>
                    <Link to="/characterCount">Character Count</Link>
                </li>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation