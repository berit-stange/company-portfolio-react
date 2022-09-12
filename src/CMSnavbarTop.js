import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function CMSnavbarTop() {

    const [user] = useAuthState(auth);

    // Signout function
    const logout = () => {
        auth.signOut();
    }

    return (

        <div className="admin-navbar-top">

            <div className="user-navigation">
                <button className="btn-logout" onClick={logout}>Logout</button>

                <Link to="#" className="welcome">
                    Hallo {auth.currentUser.email}!
                </Link>

                <Link to="/" className="nav-link">Website</Link>

            </div>

            <div className="admin-header">
                <Link to="/admin" className="admin-navbar-top-logo">
                    <li>ADMIN PANEL</li>
                </Link>

                <nav>
                    <ul>
                        {/* <Link to="/">
                            <li>Website</li>
                        </Link> */}

                        {/* <Link to="#">
                            <li>Profil</li>
                        </Link> */}

                        {/* <Link to="#">
                            <li>Logout</li>
                        </Link> */}
                    </ul>
                </nav>
            </div>

        </div>

    )
}

export default CMSnavbarTop;