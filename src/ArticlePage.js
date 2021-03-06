import React from "react";
import Footer from "./Footer";
import Navigation from './Navigation';
import paperlove1 from "./paperlove1.jpg";
import paperlove2 from "./paperlove2.jpg";

function ArticlePage() {
    return (
        <div>
            <Navigation />
            <div className="main">
                <div className="grid-container-article">

                    <div className="image-medium grid-box-a">
                        {/* A */}
                        <img src={paperlove2}></img>
                    </div>
                    <div className="image-portrait grid-box-a">
                        {/* B */}
                        <img src={paperlove2}></img>
                    </div>
                    <div className="image-portrait grid-box-a">
                        {/* C */}
                        <img src={paperlove2}></img>
                    </div>
                    <div className="image-medium grid-box-a">
                        {/* D */}
                        <img src={paperlove1}></img>
                    </div>

                    <div className="grid-box-a-text1">
                        <h1>Artikelseite</h1>
                        <h2>Text 1</h2>
                        <p className="article-intro">Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien
                            leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste
                            des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden
                            fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien.
                        </p>
                    </div>

                    <div className="grid-box-a-text2">
                        <p>TEXT 2 - Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den
                            Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte
                            beherrscht – ein geradezu unorthographisches Leben. Eines Tages aber beschloß eine
                            kleine Zeile Blindtext, ihr Name war Lorem Ipsum, hinaus zu gehen in die weite Grammatik.
                        </p>
                    </div>
                    <div className="grid-box-a-text3">
                        <p>
                            TEXT 3 - Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den
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

export default ArticlePage;