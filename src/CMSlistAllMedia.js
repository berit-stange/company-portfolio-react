import React from "react";
import { Link } from "react-router-dom";

// login function!

function CMSlistAllMedia() {
    return (
        <div className="pages-container">

            <div className="">

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

            </div>
        </div>
    )
}

export default CMSlistAllMedia;