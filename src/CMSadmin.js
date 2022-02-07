import react from "react";

function CMSadmin() {
    return (
        <div>
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

                <div className="">
                    <button className=""
                    // onClick={addElement} 
                    >+</button>
                </div>
            </div>
        </div>
    )
}

export default CMSadmin;