import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Cybersecurity from './components/Cybersecurity';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Hero Section */}
      <header id="home" className="hero">
        <div className="container">
          <span className="section-badge">Available for Contract Roles & Internship Opportunities</span>
          <h1>Adeyinka Oluwatobiloba</h1>
          <h2 style={{ color: 'var(--accent)', fontSize: 'clamp(1.2rem, 3vw, 1.75rem)', fontWeight: 600, marginBottom: '1.25rem' }}>
            Full-Stack Developer & Security Enthusiast
          </h2>
          <p>
            Building responsive, reliable web applications with React, Python, and Django. 
            Driven by clean architecture, defensive programming practices, and a growing passion for web security.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="#projects" 
              style={{
                backgroundColor: 'var(--accent)',
                color: '#020c1b',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              View My Work &rarr;
            </a>
            <a 
              href="#contact" 
              style={{
                border: '1px solid var(--accent)',
                color: 'var(--accent)',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main>
        <About />
        <Cybersecurity />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer style={{
        padding: '2rem 1rem',
        textAlign: 'center',
        borderTop: '1px solid var(--border-color)',
        color: 'var(--text-muted)',
        fontSize: '0.85rem'
      }}>
        <div className="container">
          <p>© {new Date().getFullYear()} Adeyinka Oluwatobiloba. Built with React & deployed on Netlify.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;