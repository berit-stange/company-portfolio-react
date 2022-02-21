import React from 'react';
import { Link } from 'react-router-dom';

function CMSnavSidebar() {

    return (
        <div className="admin-nav-sidebar">

            <div>
                <ul>
                    <Link to="/projekte">
                        <li>Projects</li>
                    </Link>

                    <Link to="/projekt-details">
                        <li>Media</li>
                    </Link>

                    <Link to="/artikel">
                        <li>Pages</li>
                    </Link>

                    <Link to="/">
                        <li>Website HOME</li>
                    </Link>

                </ul>
            </div>

        </div>
    )
}

export default CMSnavSidebar;