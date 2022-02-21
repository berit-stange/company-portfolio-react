import React from "react";
import ImageSlider from './ImageSlider';
import ProjectsSelection from './ProjectsSelection';
import Navigation from './Navigation';

function Home() {
    return (
        <div>
            <Navigation />
            <ImageSlider />
            <ProjectsSelection />
        </div>
    )
}

export default Home;