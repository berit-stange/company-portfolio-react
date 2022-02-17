import React from "react";
import CMSnavSidebar from './CMSnavSidebar';

// login function!

function CMSallPages() {
    return (
        <div className="admin-page">

            <div className="admin-content-container">

                <h1>Alle Seiten</h1>

                <div className="overview-row">
                    <p>Projekt 1</p>
                    <p>Ausstellung</p>
                    <span className="material-icons-round">settings</span>
                </div>

                <div className="overview-row">
                    <p>Projekt 2</p>
                    <p>Shop</p>
                    <span className="material-icons-round">settings</span>
                </div>

                <div className="overview-row">
                    <p>Projekt 3</p>
                    <p>Ausstellung</p>
                    <span className="material-icons-round">settings</span>
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
                    </table>
                </div>

            </div>
        </div>
    )
}

export default CMSallPages;