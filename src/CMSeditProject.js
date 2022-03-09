import React from "react";
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

                    <input
                        className="admin-content-input"
                        placeholder="Lölölölö"
                    // value={title}
                    // onChange={(event) => {
                    //     setElementTitle(event.target.value);
                    // }}
                    />

                    <input
                        className="admin-content-input"
                        placeholder="Text Text Text TextTextTextText TextText"
                    />

                    <input
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
        </div>

    )
}

export default CMSeditProject;