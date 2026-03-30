import React from 'react';

function Projects() {
  return (
    <div className="container">
      <h2>Projects</h2>

      <div className="grid">
        <div className="card">
          <h3>Portfolio Website</h3>
          <p>My personal developer portfolio built with React.</p>
          <p><strong>Tech:</strong> React, JavaScript, CSS</p>
          <a href="https://github.com/Tobiscus100/portfolio-website" target="_blank" rel="noreferrer">
            GitHub →
          </a>
        </div>

        <div className="card">
          <h3>Fintech Transaction API</h3>
          <p>Django REST API for financial transactions and authentication.</p>
          <p><strong>Tech:</strong> Django, PostgreSQL</p>
        </div>

        <div className="card">
          <h3>Finance Dashboard</h3>
          <p>React dashboard for tracking income and expenses.</p>
          <p><strong>Tech:</strong> React, JavaScript</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;