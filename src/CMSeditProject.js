import React from "react";
import CMSfooter from "./CMSfooter";
import CMSnavbarTop from "./CMSnavbarTop";
import CMSnavSidebar from "./CMSnavSidebar";


function CMSeditProject() {
    return (
        <div>
            <CMSnavbarTop />
            <div className="admin-page">
                <CMSnavSidebar />
                <div className="admin-add-project admin-edit-project">

                    <h1>Projekt bearbeiten</h1>

                    <textarea
                        className="admin-content-input"
                        placeholder="Text aus Datenbank
                        Lölölölö"
                    // value={title}
                    // onChange={(event) => {
                    //     setElementTitle(event.target.value);
                    // }}
                    />

                    <textarea
                        className="admin-content-input"
                        placeholder="Text Text Text TextTextTextText TextText"
                    />

                    <textarea
                        className="admin-content-input"
                        placeholder="Text Text Text TextTextTextText TextTextText TextTextTextText TextText"
                    />


                    <div >
                        <button
                            className="admin-add-btn"
                        // onClick={addElement} 
                        >
                            <span class="material-icons-round">
                                add_circle
                            </span>
                        </button>
                    </div>

                </div>
            </div>

            <CMSfooter />
        </div>

    )
}

export default CMSeditProject;