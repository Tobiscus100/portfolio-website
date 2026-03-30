import React from 'react';
import './App.css';
import About from './components/About';
import Cybersecurity from './components/Cybersecurity';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <div style={{ padding: '80px 20px'}}>
        <h1>Hi, I'm Adeyinka Oluwatobiloba 👋</h1>
      <h2>Full-Stack Developer (React + Django)</h2>
      <p>Building amazing web applications and fintech projects.</p>
    </div>

    <section style={{ padding: '50px 20px' }}>
  <About />
</section>

<section style={{ padding: '50px 20px' }}>
  <Cybersecurity />
</section>

<section style={{ padding: '50px 20px' }}>
  <Projects />
</section>

<section style={{ padding: '50px 20px' }}>
  <Skills />
</section>
      </div>
      
    
  );
     
  
}

export default App;
