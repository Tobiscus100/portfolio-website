import React from 'react';
import './App.css';
import About from './components/About';
import Cybersecurity from './components/Cybersecurity';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <div style={{ padding: '50px'}}>
        <h1>Hi, I'm Adeyinka Oluwatobiloba 👋</h1>
      <h2>Full-Stack Developer (React + Django)</h2>
      <p>Building amazing web applications and fintech projects.</p>
    </div>

    <About />
    <Cybersecurity />
    <Projects />
      </div>
      
    
  );
     
  
}

export default App;
