import React from 'react';

function About() {
  const highlights = [
    { label: "Core Stack", value: "React • Django • TypeScript" },
    { label: "Focus Areas", value: "Modern Web Apps & Scalable Systems" },
    { label: "Security Focus", value: "Application Security & Defensive Best Practices" },
    { label: "Availability", value: "Contract Roles & Internships" },
  ];

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <span style={styles.badge}>About Me</span>
        <h2 style={styles.heading}>Building Resilient Digital Solutions</h2>

        <div style={styles.contentGrid}>
          <div style={styles.bioWrapper}>
            <p style={styles.leadText}>
              Hi, I’m <strong style={{ color: '#64ffda' }}>Adeyinka Oluwatobiloba</strong>, 
              a Full-Stack Developer with an expanding focus and active interest in Cybersecurity. 
              I specialize in engineering responsive, reliable web applications using React and Django.
            </p>
            <p style={styles.text}>
               I enjoy solving practical problems by turning ideas into well-crafted, 
              user-focused digital products.
            </p>
            <p style={styles.text}>
              My engineering approach prioritizes writing clean, efficient code guided by defensive programming 
              and security-minded development principles to create robust software that delivers measurable value.
            </p>
          </div>

          <div style={styles.detailsCard}>
            <h3 style={styles.cardHeading}>Quick Overview</h3>
            <div style={styles.itemsList}>
              {highlights.map((item, index) => (
                <div key={index} style={styles.itemRow}>
                  <span style={styles.itemLabel}>{item.label}</span>
                  <span style={styles.itemValue}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: 'clamp(3.5rem, 8vw, 6rem) 1.25rem',
    backgroundColor: '#0a192f',
    scrollMarginTop: '70px',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  badge: {
    fontSize: '0.8rem',
    fontWeight: '600',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#64ffda',
    display: 'inline-block',
    marginBottom: '0.5rem',
    fontFamily: 'monospace',
  },
  heading: {
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: '700',
    color: '#e6f1ff',
    margin: '0 0 2rem 0',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    alignItems: 'start',
  },
  bioWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  leadText: {
    fontSize: '1.05rem',
    color: '#ccd6f6',
    lineHeight: 1.7,
    margin: 0,
  },
  text: {
    fontSize: '0.95rem',
    color: '#8892b0',
    lineHeight: 1.7,
    margin: 0,
  },
  detailsCard: {
    backgroundColor: '#112240',
    border: '1px solid #233554',
    borderRadius: '12px',
    padding: '1.75rem',
  },
  cardHeading: {
    color: '#e6f1ff',
    fontSize: '1.15rem',
    marginTop: 0,
    marginBottom: '1.25rem',
    borderBottom: '1px solid #233554',
    paddingBottom: '0.75rem',
  },
  itemsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.1rem',
  },
  itemRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
  },
  itemLabel: {
    fontSize: '0.75rem',
    fontFamily: 'monospace',
    color: '#64ffda',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  itemValue: {
    fontSize: '0.95rem',
    color: '#ccd6f6',
    fontWeight: '500',
  },
};

export default About;