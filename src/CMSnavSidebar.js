import React from 'react';
import { Link } from 'react-router-dom';

function CMSnavSidebar() {

    return (
        <div className="admin-nav-sidebar">

            <div>
                <ul>
                    <Link to="#">
                        <li>Projects</li>
                    </Link>

                    <Link to="#">
                        <li>Media</li>
                    </Link>

                    <Link to="#">
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