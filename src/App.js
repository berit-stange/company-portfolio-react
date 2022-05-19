import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ProjectsOverview from './ProjectsOverview';
import ProjectDetails from './ProjectDetails';
import Home from './Home';
import ArticlePage from './ArticlePage';
import CMSadmin from './CMSadmin';
import ReferencesClients from './ReferencesClients';
import CMSallMediaView from './CMSallMediaView';
import CMSallPagesView from './CMSallPagesView';
import CMSallProjectsView from './CMSallProjectsView';
import CMSeditProject from './CMSeditProject';

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
          <Route exact path="/referenzen" element={<ReferencesClients />} />
          <Route exact path="/admin" element={<CMSadmin />} />
          <Route exact path="/admin/projects" element={<CMSallProjectsView />} />
          <Route exact path="/admin/media" element={<CMSallMediaView />} />
          <Route exact path="/admin/pages" element={<CMSallPagesView />} />
          <Route exact path="/admin/edit-project" element={<CMSeditProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;