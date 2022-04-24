import React from "react";


// login function!

function CMSaddProject() {
    return (


        <div className="admin-add-project">

            <h1>Projekt hinzufügen</h1>

            <textarea
                className="admin-content-input"
                placeholder="Titel"
            // value={title}
            // onChange={(event) => {
            //     setElementTitle(event.target.value);
            // }}
            ></textarea>

            <textarea
                className="admin-content-input"
                placeholder="als nächstes: 
                - Footer Farbe (wie Header?)
                - vll ein CMS Dashboard als Startseite (> Inhalte? Buttons oder Mini-Vorschau für Komponenten)
                - media queries"
            ></textarea>

            <textarea
                className="admin-content-input"
                placeholder="Text 2"
            ></textarea>


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