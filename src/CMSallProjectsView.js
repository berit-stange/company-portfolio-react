import React from "react";
import CMSnavSidebar from './CMSnavSidebar';
import CMSnavbarTop from "./CMSnavbarTop";
import CMSlistAllProjects from "./CMSlistAllProjects";

// login function!

function CMSallProjectsView() {
    return (
        <div>

            <CMSnavbarTop />

            <div className="admin-page">

                <CMSnavSidebar />

                <div className="admin-content-container">

                    <CMSlistAllProjects />

                </div>
            </div>

        </div >
    )
}

export default CMSallProjectsView;