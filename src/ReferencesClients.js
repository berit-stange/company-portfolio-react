import React from "react";
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

function ReferencesClients() {
    return (
        <div>
            <Navigation />
            <div className="main">
                <h1>
                    Referenzen
                </h1>
                <div className="filter-container">
                    <button className="btn-filter">Ausstellung</button>
                    <button className="btn-filter">Display</button>
                    <button className="btn-filter">Messe</button>
                </div>
                <div className="center">
                    <div className="references-container">

                        {/* map through projects and sort client names + link to project detail page if one exists */}
                        <ul className="references-ul">
                            <Link to="#" className="references-a">
                                <li className="references-li">AAAAAA</li>
                            </Link>
                            <Link to="#" className="references-a">
                                <li className="references-li">BBBBBB</li>
                            </Link>
                            <Link to="#" className="references-a">
                                <li className="references-li">CCCCCC</li>
                            </Link>
                            <Link to="#" className="references-a">
                                <li className="references-li">DDDDDD</li>
                            </Link>
                            <Link to="#" className="references-a">
                                <li className="references-li">EEEEEE</li>
                            </Link>
                            <Link to="#" className="references-a">
                                <li className="references-li">FFFFFF</li>
                            </Link>
                            <Link to="#" className="references-a">
                                <li className="references-li">GGGGGG</li>
                            </Link>
                            <Link to="#" className="references-a">
                                <li className="references-li">HHHHHH</li>
                            </Link>
                            <Link to="#" className="references-a">
                                <li className="references-li">IIIIII</li>
                            </Link>
                        </ul>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ReferencesClients;