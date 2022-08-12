import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Navigation() {

    const [user] = useAuthState(auth);

    // Signout function
    const logout = () => {
        auth.signOut();
    }

    return (
        <div className="nav-container">

            <div className="user-navigation">
                <button className="btn-logout" onClick={logout}>Logout</button>

                <div className="welcome">
                    Hallo {auth.currentUser.email}!
                </div>

            </div>

            <div className="page-navigation">

                <Link to="/">
                    <img src={logo} className="logo" alt="Logo company xy"></img>
                </Link>

                <div>
                    <ul>
                        <Link to="/projekte">
                            <li>Projekte</li>
                        </Link>
                        <Link to="/projekt-details">
                            <li>Details</li>
                        </Link>
                        <Link to="/artikel">
                            <li>Artikel</li>
                        </Link>
                        <Link to="/referenzen">
                            <li>Referenzen</li>
                        </Link>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Navigation;