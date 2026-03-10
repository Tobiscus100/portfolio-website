import React from 'react';

function Projects() {
    return (
        <section style={{ padding: '50px', maxWidth:'1000px', margin: '0 auto', textAlign: 'center'}}>
            <h2>Projects</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
                {/* Example project cards */}
                <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', width: '300px', textAlign: 'left' }}>
                    <h3>Portfolio Website</h3>
                    <p>My personal developer portfolio built with React to showcase my full-stack and cybersecurity projects.</p>
                    <p><strong>Tech Stack:</strong> React, JavaScript, CSS</p>
                    <a href="https://github.com/Tobiscus100/portfolio-website" target="_blank" rel="noreferrer">GitHub</a>
                </div>
                <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', width: '300px', textAlign: 'left' }}>
                    <h3>Fintech Transaction API</h3>
                    <p> A Django REST API simulating financial transactions including authentication, balance tracking and transactional history.</p>
                    <p><strong>Tech Stack:</strong> Django, Django REST Framework, PostgreSQL</p>
                </div> 
                <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', width: '300px', textAlign: 'left' }}>
                    <h3>Finance Dashboard</h3>
                    <p> A React dashboard for tracking income and expenses with charts and financial analytics.</p>
                    <p><strong>Tech Stack:</strong> React, JavaScript, CSS</p>
                </div>  
            </div>
        </section>
    );
}

export default Projects;