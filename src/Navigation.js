import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

function Navigation() {

    return (
        <div className="nav-container">
            <Link to="/">
                <img src={logo} className="logo"></img>
            </Link>

            <div>
                <ul>
                    <Link to="/projekte">
                        <li>Link</li>
                    </Link>
                    <Link to="/projekt-details">
                        <li>Link</li>
                    </Link>
                </ul>
            </div>

        </div>
    )
}

export default Navigation;