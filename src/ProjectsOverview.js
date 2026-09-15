import React, { useEffect, useState } from "react";
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import Footer from "./Footer";

import { auth, db } from "./firebase/config"; 
import { useAuthState } from "react-firebase-hooks/auth";

import { collection, getDocs, query, where } from "firebase/firestore";

function ProjectsOverview() {
    
    const [user] = useAuthState(auth); 
    const [projects, setProjects] = useState([]);

    useEffect(() => { if (!user) return; 
        const projectsCollection = collection(db, "projects"); 
        const q = query( 
            projectsCollection, 
            where("uid", "==", user.uid) ); 
        
            getDocs(q).then((snapshot) => { 
                const projectData = snapshot.docs.map((doc) => ({ 
                    id: doc.id, 
                    ...doc.data() })); 
                    setProjects(projectData); 
                });
                 }, [user]);

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

                        {projects.map((project) => (
                        <Link to="/projekt-details" key={project.id}>
                            <div className=""> 
                            <h2>{project.title}</h2> 
                            <p>{project.category}</p> 
                            </div>
                        </Link>
                        
))}

                        {/* <div className="project-image-small"></div>
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
                        <div className="project-image-small"></div> */}
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    );
}

export default ProjectsOverview;