import React from "react";

// login function!

function CMSlistAllProjects() {
    return (
        <div className="admin-page">

            <div className="admin-content-container">

                <h1>Alle Seiten</h1>

                <div className="filter-box">
                    {/* <p>Filter:</p> */}
                    <button className="filter">Ausstellung</button>
                    <button className="filter">Shop</button>
                    <button className="filter">Messe</button>
                    <button className="filter">Display</button>
                </div>
                <div id="overview-table">
                    <table>
                        <tr>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>Projekt 1</td>
                            <td>Ausstellung</td>
                            <td>
                                <span className="material-icons-round">settings</span>
                                <span className="material-icons-round">delete</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Projekt 2</td>
                            <td>Shop</td>
                            <td>
                                <span className="material-icons-round">settings</span>
                                <span className="material-icons-round">delete</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Projekt 3</td>
                            <td>Shop</td>
                            <td>
                                <span className="material-icons-round">settings</span>
                                <span className="material-icons-round">delete</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Projekt 4</td>
                            <td>Ausstellung</td>
                            <td>
                                <span className="material-icons-round">settings</span>
                                <span className="material-icons-round">delete</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Projekt 5</td>
                            <td>Shop</td>
                            <td>
                                <span className="material-icons-round">settings</span>
                                <span className="material-icons-round">delete</span>
                            </td>
                        </tr>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default CMSlistAllProjects;