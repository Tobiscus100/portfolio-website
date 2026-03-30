import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Cybersecurity from './components/Cybersecurity';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="hero">
        <h1>Hi, I'm Adeyinka Oluwatobiloba 👋</h1>
        <h2>Full-Stack Developer (React + Django)</h2>
        <p>Building amazing web applications and fintech projects.</p>
      </header>

      <main>
        <section id="about">
  <About />
</section>

<section id="cybersecurity" className="alt">
  <Cybersecurity />
</section>

<section id="projects">
  <Projects />
</section>

<section id="skills" className="alt">
  <Skills />
</section>
      </main>

    </div>
  );
}

export default App;