import React from "react";
import CMSnavSidebar from './CMSnavSidebar';
import CMSnavbarTop from "./CMSnavbarTop";
import CMSlistAllPages from "./CMSlistAllPages";
import CMSfooter from "./CMSfooter";

// login function!

function CMSallPagesView() {
    return (
        <div>

            <CMSnavbarTop />

            <div className="admin-page">

                <CMSnavSidebar />

                <div className="admin-content-container">

                    <CMSlistAllPages />

                </div>
            </div>

            <CMSfooter />
        </div >
    )
}

export default CMSallPagesView;