import React from "react";

function ProjectDetails() {
    return (
        <div>
            <div className="grid-container-2">
                <div className="image-large"></div>
                <div>
                    <h1>Projekt Titel</h1>
                    <h2>Ort</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                        et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                        no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                        duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus est Lorem ipsum dolor sit amet.</p>
                    <h3>Kunde: Lorem ipsum dolor</h3>
                    <h3>Jahr: 2014</h3>
                    {/* <p>Lorem ipsum dolor</p> */}
                </div>
            </div>
            <div className="grid-container-3">
                <div className="image-medium"></div>
                <div className="image-medium"></div>
                <div className="image-medium"></div>
            </div>
        </div>
    )
}

export default ProjectDetails;