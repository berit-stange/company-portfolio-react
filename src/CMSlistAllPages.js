import React from "react";
import { Link } from "react-router-dom";

// login function!

function CMSlistAllPages() {
    return (
        <div className="pages-container">

            <div className="">

                <h1>Alle Seiten</h1>

                <div className="filter-box">
                    {/* <p>Filter:</p> */}
                    {/* <button className="filter">Ausstellung</button> */}
                    {/* <button className="filter">Shop</button> */}
                    {/* <button className="filter">Messe</button> */}
                    {/* <button className="filter">Display</button> */}
                </div>
                <div id="overview-table">
                    <table>
                        <tr>
                            <th>Title</th>
                            <th>Kategorie</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>Impressum</td>
                            <td>xxxxx</td>
                            <td>
                                <Link to="/admin/project">
                                    <span className="material-icons-round">settings</span>
                                </Link>
                                <span className="material-icons-round">delete</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Datenschutz</td>
                            <td>xxxxx</td>
                            <td>
                                <Link to="/admin/project">
                                    <span className="material-icons-round">settings</span>
                                </Link>
                                <span className="material-icons-round">delete</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Über uns</td>
                            <td>xxxx</td>
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

export default CMSlistAllPages;