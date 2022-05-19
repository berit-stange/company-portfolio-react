import React from "react";
import { Link } from "react-router-dom";
import paperlove1 from "./paperlove1.jpg";
import paperlove2 from "./paperlove2.jpg";

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
                    <img src={paperlove1} alt="special project"></img>
                    <div className="hover-link">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                        <Link to="/admin/project">
                            <span className="material-icons-round">settings</span>
                        </Link>
                        <span className="material-icons-round">delete</span>
                    </div>
                </div>

                <div className="media-card">
                    <img src={paperlove2} alt="shop with white table"></img>
                    <div className="hover-link">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                        <Link to="/admin/project">
                            <span className="material-icons-round">settings</span>
                        </Link>
                        <span className="material-icons-round">delete</span>
                    </div>
                </div>

                <div className="media-card">
                    <img src={paperlove1} alt="shop with white table"></img>
                    <div className="hover-link">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                        <Link to="/admin/project">
                            <span className="material-icons-round">settings</span>
                        </Link>
                        <span className="material-icons-round">delete</span>
                    </div>
                </div>

                <div className="media-card">
                    <img src={paperlove2} alt="shop with white table"></img>
                    <div className="hover-link">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                        <Link to="/admin/project">
                            <span className="material-icons-round">settings</span>
                        </Link>
                        <span className="material-icons-round">delete</span>
                    </div>
                </div>

                <div className="media-card">
                    <img src={paperlove1} alt="shop with white table"></img>
                    <div className="hover-link">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                        <Link to="/admin/project">
                            <span className="material-icons-round">settings</span>
                        </Link>
                        <span className="material-icons-round">delete</span>
                    </div>
                </div>

                <div className="media-card">
                    <img src={paperlove2} alt="shop with white table"></img>
                    <div className="hover-link">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                        <Link to="/admin/project">
                            <span className="material-icons-round">settings</span>
                        </Link>
                        <span className="material-icons-round">delete</span>
                    </div>
                </div>

                <div className="media-card">
                    <img src={paperlove1} alt="shop with white table"></img>
                    <div className="hover-link">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                        <Link to="/admin/project">
                            <span className="material-icons-round">settings</span>
                        </Link>
                        <span className="material-icons-round">delete</span>
                    </div>
                </div>

                <div className="media-card">
                    <img src={paperlove2} alt="shop with white table"></img>
                    <div className="hover-link">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                        <Link to="/admin/project">
                            <span className="material-icons-round">settings</span>
                        </Link>
                        <span className="material-icons-round">delete</span>
                    </div>
                </div>


            </div>
            {/* end madia cards */}

        </div>
    )
}

export default CMSlistAllMedia;