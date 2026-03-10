import React from 'react';

function Projects() {
    return (
        <section style={{ padding: '50px', maxWidth:'1000px', margin: '0 auto', textAlign: 'center'}}>
            <h2>Projects</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
                {/* Example project cards */}
                <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', width: '300px', textAlign: 'left' }}>
                    <h3>Portfolio Website</h3>
                    <p>My personal React portfolio website displaying all my projects and skills acquired.</p>
                    <a href="https://github.com/Tobiscus100/portfolio-website" target="_blank" rel="noreferrer">GitHub</a>
                </div>
                <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', width: '300px', textAlign: 'left' }}>
                    <h3>Fintech Transaction API</h3>
                    <p>Django REST API simulating banking transactions with authentication and transactional history.</p>
                    <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                </div> 
                <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', width: '300px', textAlign: 'left' }}>
                    <h3>Finance Dashboard</h3>
                    <p>React app visualizing income and expenses with charts and analytics for fintech projects.</p>
                    <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                </div>  
            </div>
        </section>
    );
}

export default Projects;