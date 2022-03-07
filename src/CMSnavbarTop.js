import React from 'react';
import { Link } from 'react-router-dom';

function CMSnavbarTop() {

    return (
        <div>

            <div className="admin-navbar-top">
                <ul>


                    <Link to="/">
                        <li>HOME</li>
                    </Link>

                    <Link to="#">
                        <li>Link 1</li>
                    </Link>

                    <Link to="#">
                        <li>Link 2</li>
                    </Link>

                    <Link to="#">
                        <li>Link 3</li>
                    </Link>

                </ul>
            </div>

        </div>
    )
}

export default CMSnavbarTop;