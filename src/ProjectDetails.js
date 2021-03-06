import React from "react";
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import paperlove1 from "./paperlove1.jpg";
import paperlove2 from "./paperlove2.jpg";
import Footer from "./Footer";

function ProjectDetails() {
    return (
        <div>
            <Navigation />
            <div className="main">

                <div className="breadcrumbs">
                    <p>
                        <Link to="/projekte">- Projekte</Link> - - Details
                    </p>
                </div>

                <div className="grid-container-mix">

                    {/* map function images */}
                    <div className="image-medium grid-box">
                        <img src={paperlove1}></img>
                    </div>
                    <div className="image-1-2 grid-box">
                        <img src={paperlove2}></img>
                    </div>
                    <div className="image-1-2 grid-box">
                        <img src={paperlove2}></img>
                    </div>
                    <div className="image-1-2 grid-box">
                        <img src={paperlove2}></img>
                    </div>

                    {/* map function text */}
                    <div className="grid-box-text1">
                        <h1>T1: Projekt Titel</h1>
                        <h2>Ort</h2>
                        <p>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien
                            leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste
                            des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden
                            fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien.
                            Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den
                            Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte
                            beherrscht – ein geradezu unorthographisches Leben. Eines Tages aber beschloß eine
                            kleine Zeile Blindtext, ihr Name war Lorem Ipsum, hinaus zu gehen in die weite Grammatik.
                        </p>
                        <h3>Kunde: Lorem ipsum dolor</h3>
                        <h3>Jahr: 2014</h3>
                    </div>
                    <div className="grid-box-text2">
                        <h3>Text 2</h3>
                        <p>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien
                            leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste
                            des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden
                            fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien.
                            Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den
                            Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte
                            beherrscht – ein geradezu unorthographisches Leben. Eines Tages aber beschloß eine
                            kleine Zeile Blindtext, ihr Name war Lorem Ipsum, hinaus zu gehen in die weite Grammatik.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ProjectDetails;