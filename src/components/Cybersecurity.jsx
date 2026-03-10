import React from 'react';

function Cybersecurity() {
    return (
        <section style={{ padding: '50px', maxWidth: '800px', margin: '0 auto', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
            <h2>Cybersecurity Journey</h2>
            <p>I have completed courses like: </p>
            <ul style={{listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left', display: 'inline-block', }}>
                <li>Introduction to Cybersecurity</li>
                <li> Junior Cybersecurity Analyst path by Cisco</li>
                <li> Network Basics</li>
                <li> Network Devices and Initial Configuration</li>
                <li> End Point Security</li>
                <li> Datacom Cybersecurity Job Simulation</li>
                <li> Deloitte Cyber Job Simulation</li>
                <li> Hp Introduction to Cybsersecurity Awareness</li>
                <li>and more...</li>
            </ul>
            <p style={{marginTop: '20px' }}>Currently, I am learning Python for Cybersecurity to build secure web applications and gain hands-on experience in protecting systems and networks.</p>
        </section>
    );
}

export default Cybersecurity;