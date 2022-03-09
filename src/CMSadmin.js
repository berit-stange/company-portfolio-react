import React from "react";
import CMSnavSidebar from './CMSnavSidebar';
import CMSlistAllProjects from './CMSlistAllProjects';
import CMSnavbarTop from "./CMSnavbarTop";
import CMSaddProject from "./CMSaddProject";

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

                </div>
            </div>

        </div >
    )
}

export default CMSadmin;