import React from "react";
import CMSnavSidebar from './CMSnavSidebar';
import CMSnavbarTop from "./CMSnavbarTop";
import CMSlistAllMedia from "./CMSlistAllMedia";
import CMSfooter from "./CMSfooter";

// login function!

function CMSallMediaView() {
    return (
        <div>

            <CMSnavbarTop />

            <div className="admin-page">

                <CMSnavSidebar />

                <div className="admin-content-container">

                    <CMSlistAllMedia />

                </div>
            </div>

            <CMSfooter />
        </div >
    )
}

export default CMSallMediaView;