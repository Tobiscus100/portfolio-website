import React from "react";

function Skills() {
  return (
    <section
      style={{
        padding: "50px",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Skills</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {" "}
        <div>
          <h3>Frontend</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div>
          <h3>Backend</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>Python</li>
            <li>Django</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div>
          <h3>Cybersecurity</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>Network Fundamentals</li>
            <li>Endpoint Security</li>
            <li>Network Defense</li>
            <li>Python for Cybersecurity</li>
            <li>and more...</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
