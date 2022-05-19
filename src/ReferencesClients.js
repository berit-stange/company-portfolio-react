import React from "react";
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import Footer from "./Footer";

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
                                <li className="references-li">CCCCCC CCC CCCCCC</li>
                            </Link>
                            <Link to="#" className="references-a">
                                <li className="references-li">DDDDDD</li>
                            </Link>
                            <Link to="#" className="references-a">
                                <li className="references-li">EEEEEE EEE EEEEEE</li>
                            </Link>
                            <Link to="#" className="references-a">
                                <li className="references-li">FFFFFF</li>
                            </Link>
                            <Link to="#" className="references-a">
                                <li className="references-li">GGGGGG GGGGGGGGG GGG</li>
                            </Link>
                            <Link to="#" className="references-a">
                                <li className="references-li">HHHHHH</li>
                            </Link>
                            <Link to="#" className="references-a">
                                <li className="references-li">IIIIII</li>
                            </Link>
                            <Link to="#" className="references-a">
                                <li className="references-li">JJJ J JJJJJJ JJJ</li>
                            </Link>
                            <Link to="#" className="references-a">
                                <li className="references-li">KKKKKKKKK</li>
                            </Link>
                            <Link to="#" className="references-a">
                                <li className="references-li">LLLLLL</li>
                            </Link>

                        </ul>

                    </div>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default ReferencesClients;