import React from 'react';
import { Link } from 'react-router-dom';

function CMSnavbarTop() {

    return (

        <div className="admin-navbar-top">

            <Link to="/admin" className="admin-navbar-top-logo">
                <li>ADMIN PANEL</li>
            </Link>

            <nav>
                <ul>
                    <Link to="/">
                        <li>Website</li>
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