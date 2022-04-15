import React from "react";
import { Link } from "react-router-dom";

// login function!

function CMSlistAllMedia() {
    return (
        <div className="pages-container">


            <h1>Alle Medien</h1>

            <div className="filter-box">
                <p>Filter:</p>
                <button className="filter">Foto</button>
                <button className="filter">Video</button>

                <div className="search-box">
                    <input
                        className="search-input"
                        type="search-input"
                        placeholder="Suche"
                        // onChange={(event) => { setSearchTerm(event.target.value); }}
                        aria-label="Suche" />
                </div>
            </div>



            {/* start madia cards */}
            <div className="media-card-container">

                <div className="media-card">
                    <div className="media-title">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                        <div>
                            <Link to="/admin/project" className="material-icons-round">
                                <span className="material-icons-round">settings</span>
                            </Link>
                        </div>

                        <span className="material-icons-round">delete</span>

                    </div>
                </div>

                <div className="media-card">
                    <div className="media-title">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                        <span className="material-icons-round ">settings</span>
                        <span className="material-icons-round">delete</span>
                    </div>
                </div>

                <div className="media-card">
                    <div className="media-title">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                        <span className="material-icons-round ">settings</span>
                        <span className="material-icons-round">delete</span>
                    </div>
                </div>

                <div className="media-card">
                    <div className="media-title">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                        <span className="material-icons-round ">settings</span>
                        <span className="material-icons-round">delete</span>
                    </div>
                </div>

                <div className="media-card">
                    <div className="media-title">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                        <span className="material-icons-round ">settings</span>
                        <span className="material-icons-round">delete</span>
                    </div>
                </div>

                <div className="media-card">
                    <div className="media-title">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                        <span className="material-icons-round ">settings</span>
                        <span className="material-icons-round">delete</span>
                    </div>
                </div>

                <div className="media-card">
                    <div className="media-title">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                        <span className="material-icons-round ">settings</span>
                        <span className="material-icons-round">delete</span>
                    </div>
                </div>

            </div>
            {/* end madia cards */}

        </div>
    )
}

export default CMSlistAllMedia;