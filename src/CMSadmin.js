import React from "react";
import { Link } from 'react-router-dom';
import CMSnavSidebar from './CMSnavSidebar';
import CMSnavbarTop from "./CMSnavbarTop";
// import CMSaddProject from "./CMSaddProject";
// import CMSlistAllProjects from './CMSlistAllProjects';
// import CMSlistAllPages from "./CMSlistAllPages";
// import CMSlistAllMedia from "./CMSlistAllMedia";
import CMSfooter from "./CMSfooter";

// login function!

function CMSadmin() {
    return (
        <div>

            <CMSnavbarTop />

            <div className="admin-page">

                <CMSnavSidebar />

                <div className="admin-content-container admin-dashboard-container">
                    <div><Link to="/admin/projects" className="dashboard-link">Projekt hinzufügen</Link></div>

                    <div><Link to="/admin/projects" className="dashboard-link">Alle Projekte</Link></div>

                    <div><Link to="/admin/projects" className="dashboard-link">Alle Seiten</Link></div>

                    <div><Link to="/admin/projects" className="dashboard-link">Alle Medien</Link></div>


                    {/* <CMSaddProject /> */}

                    {/* <CMSlistAllProjects /> */}

                    {/* <CMSlistAllPages /> */}

                    {/* <CMSlistAllMedia /> */}

                </div>
            </div>

            <CMSfooter />
        </div >
    )
}

export default CMSadmin;