import React from "react";
import CMSnavSidebar from './CMSnavSidebar';
import CMSnavbarTop from "./CMSnavbarTop";
import CMSaddProject from "./CMSaddProject";
import CMSlistAllProjects from './CMSlistAllProjects';
import CMSlistAllPages from "./CMSlistAllPages";
import CMSlistAllMedia from "./CMSlistAllMedia";

// login function!

function CMSadmin() {
    return (
        <div>

            <CMSnavbarTop />

            <div className="admin-page">

                <CMSnavSidebar />

                <div className="admin-content-container">

                    <CMSaddProject />

                    <CMSlistAllProjects />

                    <CMSlistAllPages />

                    <CMSlistAllMedia />

                </div>
            </div>

        </div >
    )
}

export default CMSadmin;