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

                </ul>
            </div>

        </div>
    )
}

export default CMSnavSidebar;