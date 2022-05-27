import React from "react";
import CMSnavSidebar from './CMSnavSidebar';
import CMSnavbarTop from "./CMSnavbarTop";
import CMSlistAllProjects from "./CMSlistAllProjects";
import CMSfooter from "./CMSfooter";

// login function!

function CMSallProjectsView() {
    return (
        <div>

            <CMSnavbarTop />

            <div className="admin-page">

                <CMSnavSidebar />

                <div className="admin-content-container admin-all-projects-container">

                    <CMSlistAllProjects />

                </div>
            </div>

            <CMSfooter />
        </div >
    )
}

export default CMSallProjectsView;