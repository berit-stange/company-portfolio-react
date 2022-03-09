import React from "react";


// login function!

function CMSaddProject() {
    return (


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

        </div>


    )
}

export default CMSaddProject;