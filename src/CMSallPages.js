import React from "react";
import CMSnavSidebar from './CMSnavSidebar';

// login function!

function CMSallPages() {
    return (
        <div className="admin-page">

            <div className="admin-content-container">

                <h1>Alle Seiten</h1>

                <div className="overview-row">
                    <p>Projekt 1</p>
                    <span className="material-icons-round icon-settings">settings</span>
                </div>

                <div className="overview-row">
                    <p>Projekt 2</p>
                    <span className="material-icons-round icon-settings">settings</span>
                </div>

                <div className="overview-row">
                    <p>Projekt 3</p>
                    <span className="material-icons-round icon-settings">settings</span>
                </div>

                <div className="overview-row">
                    <p>Projekt 4</p>
                    <span className="material-icons-round icon-settings">settings</span>
                </div>

                <div className="overview-row">
                    <p>Projekt 5</p>
                    <span className="material-icons-round icon-settings">settings</span>
                </div>

            </div>
        </div>
    )
}

export default CMSallPages;