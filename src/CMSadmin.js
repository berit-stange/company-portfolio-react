import React from "react";
import CMSnavSidebar from './CMSnavSidebar';
import CMSnavbarTop from "./CMSnavbarTop";
import CMSaddProject from "./CMSaddProject";
import CMSlistAllProjects from './CMSlistAllProjects';
import CMSlistAllPages from "./CMSlistAllPages";

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

                </div>
            </div>

        </div >
    )
}

export default CMSadmin;