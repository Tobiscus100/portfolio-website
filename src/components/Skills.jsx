import React from "react";

function Skills() {
  return (
    <div className="container">
      <h2>Skills</h2>

      <div className="grid">
        <div className="card">
          <h3>Frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>

        <div className="card">
          <h3>Backend</h3>
          <ul>
            <li>Python</li>
            <li>Django</li>
            <li>REST APIs</li>
          </ul>
        </div>

        <div className="card">
          <h3>Cybersecurity</h3>
          <ul>
            <li>Network Fundamentals</li>
            <li>Endpoint Security</li>
            <li>Network Defense</li>
            <li>Python for Cybersecurity</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;