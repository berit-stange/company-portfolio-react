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

            {/* start table */}
            <div id="overview-table">
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Kategorie</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>ausstellung-xy-01.jpg</td>
                        <td>Foto</td>
                        <td>
                            <Link to="/admin/project">
                                <span className="material-icons-round">settings</span>
                            </Link>
                            <span className="material-icons-round">delete</span>
                        </td>
                    </tr>
                    <tr>
                        <td>ausstellung-xy-02.jpg</td>
                        <td>Foto</td>
                        <td>
                            <Link to="/admin/project">
                                <span className="material-icons-round">settings</span>
                            </Link>
                            <span className="material-icons-round">delete</span>
                        </td>
                    </tr>
                    <tr>
                        <td>ausstellung-xy-03.jpg</td>
                        <td>Video</td>
                        <td>
                            <Link to="/admin/project">
                                <span className="material-icons-round">settings</span>
                            </Link>
                            <span className="material-icons-round">delete</span>
                        </td>
                    </tr>
                </table>
            </div>
            {/* end table */}

            {/* start madia cards */}
            <div className="media-card-container">
                <div className="media-card">
                    <div className="media-title">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                    </div>
                </div>
                <div className="media-card">
                    <div className="media-title">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                    </div>
                </div>
                <div className="media-card">
                    <div className="media-title">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                    </div>
                </div>
                <div className="media-card">
                    <div className="media-title">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                    </div>
                </div>
                <div className="media-card">
                    <div className="media-title">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                    </div>
                </div>
                <div className="media-card">
                    <div className="media-title">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                    </div>
                </div>
                <div className="media-card">
                    <div className="media-title">
                        <p>Media Title XY</p>
                        <p>media-file.jpg</p>
                    </div>
                </div>
            </div>
            {/* end madia cards */}

        </div>
    )
}

export default CMSlistAllMedia;