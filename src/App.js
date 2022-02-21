import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import Navigation from './Navigation';
import ProjectsOverview from './ProjectsOverview';
// import ProjectsSelection from './ProjectsSelection';
import ProjectDetails from './ProjectDetails';
import Home from './Home';
import Footer from './Footer';
import ArticlePage from './ArticlePage';
import CMSadmin from './CMSadmin';

function App() {
  return (
    <div>
      <BrowserRouter >
        {/* <Navigation /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projekte" element={<ProjectsOverview />} />
          <Route exact path="/projekt-details" element={<ProjectDetails />} />
          <Route exact path="/artikel" element={<ArticlePage />} />
          <Route exact path="/admin" element={<CMSadmin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;