import React from "react";
import { Link } from 'react-router-dom';


function CMSfooter() {
    return (
        <div className="cms-footer-container">
            <Link to="/">
                CMS ADMIN
            </Link>

            <div>
                <ul>
                    <Link to="/projekte">
                        <li>Link</li>
                    </Link>
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

export default CMSfooter; 