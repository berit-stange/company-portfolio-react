import React from "react";
import CMSnavSidebar from './CMSnavSidebar';
import CMSallPages from './CMSallPages';

// login function!

function CMSadmin() {
    return (
        <div className="admin-page">

            <CMSnavSidebar />

            <div className="admin-content-container">

                <h1>Projekt hinzufügen</h1>

                <input
                    className="admin-content-input"
                    placeholder="Titel"
                // value={title}
                // onChange={(event) => {
                //     setElementTitle(event.target.value);
                // }}
                />

                <input
                    className="admin-content-input"
                    placeholder="Text 1"
                />

                <input
                    className="admin-content-input"
                    placeholder="Text 2"
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

                <CMSallPages />

            </div>
        </div>
    )
}

export default CMSadmin;