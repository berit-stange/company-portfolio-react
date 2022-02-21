import React from "react";
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

function ProjectsOverview() {
    return (
        <div>
            <Navigation />
            <div className="main">
                <h1>
                    Projekte
                </h1>
                <div className="filter-container">
                    <button className="btn-filter">Ausstellung</button>
                    <button className="btn-filter">Display</button>
                    <button className="btn-filter">Messe</button>
                </div>
                <div className="center">
                    <div className="project-grid-container">
                        <Link to="/projekt-details">
                            <div className="project-image-small"></div>
                        </Link>
                        <Link to="/projekt-details">
                            <div className="project-image-small"></div>
                        </Link>
                        <Link to="/projekt-details">
                            <div className="project-image-small"></div>
                        </Link>
                        <div className="project-image-small"></div>
                        <div className="project-image-small"></div>
                        <div className="project-image-small"></div>

                        <div className="project-image-small"></div>
                        <div className="project-image-small"></div>
                        <div className="project-image-small"></div>

                        <div className="project-image-small"></div>
                        <div className="project-image-small"></div>
                        <div className="project-image-small"></div>

                        <div className="project-image-small"></div>
                        <div className="project-image-small"></div>
                        <div className="project-image-small"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectsOverview;