import React from "react";
import CMSnavSidebar from './CMSnavSidebar';

// login function!

function CMSadmin() {
    return (
        <div className="admin-page">

            <CMSnavSidebar />

            <div>
                <h1>Projekt hinzufügen</h1>
                <input
                    placeholder="Titel"
                // value={title}
                // onChange={(event) => {
                //     setElementTitle(event.target.value);
                // }}
                />
                <input
                    placeholder="Text 1"
                />
                <input
                    placeholder="Text 2"
                />

                {/* <div className=""> */}
                <button
                // onClick={addElement} 
                >
                    <span class="material-icons-round">
                        add_circle
                    </span>
                </button>
                {/* </div> */}
            </div>
        </div>
    )
}

export default CMSadmin;