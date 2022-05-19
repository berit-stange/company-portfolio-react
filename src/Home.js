import React from "react";
import ImageSlider from './ImageSlider';
import ProjectsSelection from './ProjectsSelection';
import Navigation from './Navigation';
import Footer from './Footer';

function Home() {
    return (
        <div>
            <Navigation />
            <ImageSlider />
            <ProjectsSelection />
            <Footer />
        </div>
    )
}

export default Home;