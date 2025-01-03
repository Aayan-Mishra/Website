import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ResearchPage from './pages/ResearchPage';
import ContactPage from './pages/ContactPage';

// Simple router based on pathname
function getPage() {
  const path = window.location.pathname;
  
  const PageComponent = (() => {
    switch (path) {
      case '/':
        return Hero;
      case '/about':
        return AboutPage;
      case '/projects':
        return ProjectsPage;
      case '/research':
        return ResearchPage;
      case '/contact':
        return ContactPage;
      default:
        return Hero;
    }
  })();

  return (
    <div key={path} className="page-transition">
      <PageComponent />
    </div>
  );
}

function App() {
  return (
    <Layout>
      {getPage()}
    </Layout>
  );
}

export default App;