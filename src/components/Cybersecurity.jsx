import React from 'react';

function Cybersecurity() {
  const credentials = [
    { name: 'Junior Cybersecurity Analyst Career Path', issuer: 'Cisco Networking Academy', category: 'Pathway' },
    { name: 'Endpoint Security & Network Basics', issuer: 'Cisco Networking Academy', category: 'Networking' },
    { name: 'Network Devices & Initial Configuration', issuer: 'Cisco Networking Academy', category: 'Infrastructure' },
    { name: 'Cybersecurity Job Simulation', issuer: 'Deloitte', category: 'Enterprise' },
    { name: 'Cybersecurity Job Simulation', issuer: 'Datacom', category: 'Operations' },
    { name: 'Cybersecurity Awareness', issuer: 'HP LIFE', category: 'Fundamentals' },
    { name: 'Introduction to Cybersecurity', issuer: 'Industry Standard', category: 'Foundations' },
  ];

  return (
    <section id="cybersecurity" style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.badge}>Security & Credentials</span>
          <h2 style={styles.heading}>Cybersecurity & Systems Defense</h2>
          <p style={styles.subtitle}>
            Verified foundations in networking, endpoint defense, and enterprise cybersecurity simulations.
          </p>
        </div>

        {/* Credentials Grid */}
        <div style={styles.grid}>
          {credentials.map((item, idx) => (
            <div key={idx} style={styles.card}>
              <div style={styles.cardTop}>
                <span style={styles.categoryBadge}>{item.category}</span>
                <span style={styles.verifiedDot}>• Verified</span>
              </div>
              <h3 style={styles.cardTitle}>{item.name}</h3>
              <p style={styles.cardIssuer}>{item.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: 'clamp(3.5rem, 7vw, 6rem) 1.25rem',
    backgroundColor: '#f8fafc',
    scrollMarginTop: '5rem',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  header: {
    marginBottom: '2.5rem',
  },
  badge: {
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#0284c7',
    display: 'inline-block',
    marginBottom: '0.5rem',
  },
  heading: {
    fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
    fontWeight: '800',
    color: '#0f172a',
    margin: 0,
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#64748b',
    marginTop: '0.75rem',
    maxWidth: '650px',
    lineHeight: 1.6,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1rem',
  },
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04)',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem',
  },
  categoryBadge: {
    fontSize: '0.7rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: '#0284c7',
    backgroundColor: '#e0f2fe',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px',
  },
  verifiedDot: {
    fontSize: '0.75rem',
    color: '#10b981',
    fontWeight: '600',
  },
  cardTitle: {
    fontSize: '0.95rem',
    fontWeight: '700',
    color: '#1e293b',
    margin: '0 0 0.5rem 0',
    lineHeight: 1.4,
  },
  cardIssuer: {
    fontSize: '0.8rem',
    color: '#64748b',
    margin: 0,
  },
};

export default Cybersecurity;