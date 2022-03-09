import React from 'react';
import { Link } from 'react-router-dom';

function CMSnavbarTop() {

    return (

        <div className="admin-navbar-top">

            <div className="admin-navbar-top-logo">
                ADMIN PANEL
            </div>
            <nav>
                <ul>
                    <Link to="/">
                        <li>HOME</li>
                    </Link>

                    <Link to="#">
                        <li>Profil</li>
                    </Link>

                    <Link to="#">
                        <li>Logout</li>
                    </Link>
                </ul>
            </nav>

        </div>

    )
}

export default CMSnavbarTop;