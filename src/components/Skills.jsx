import React from "react";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      badge: "User Interface & State",
      description: "Building fast, accessible, and responsive user interfaces.",
      skills: [
        "React",
        "JavaScript (ES6+)",
        "HTML5 / CSS3",
        "Vite",
        "Responsive UI / Tailwind",
      ],
    },
    {
      title: "Backend & Systems",
      badge: "APIs & Databases",
      description: "Architecting reliable server backends and secure data layers.",
      skills: [
        "Python",
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "SQLite",
        "Stripe Payment Gateway",
      ],
    },
    {
      title: "Cybersecurity & Defense",
      badge: "Security & Networking",
      description: "Hardening applications and inspecting network traffic.",
      skills: [
        "Network Fundamentals",
        "Endpoint Security",
        "Network Defense",
        "Python for Cybersecurity",
      ],
    },
    {
      title: "Tools & Workflows",
      badge: "DevOps & Collaboration",
      description: "Maintaining reliable source control and deployment setups.",
      skills: [
        "Git & GitHub",
        "Netlify Deployment",
        "Postman API Testing",
        "VS Code",
      ],
    },
  ];

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.badge}>Technical Arsenal</span>
          <h2 style={styles.heading}>Skills & Capabilities</h2>
          <p style={styles.subtitle}>
            A comprehensive overview of the programming languages, frameworks, security protocols, and development tools I leverage to engineer software.
          </p>
        </div>

        {/* Categories Grid */}
        <div style={styles.grid}>
          {skillCategories.map((category, idx) => (
            <div key={idx} style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={styles.categoryBadge}>{category.badge}</span>
                <h3 style={styles.cardTitle}>{category.title}</h3>
                <p style={styles.cardDescription}>{category.description}</p>
              </div>

              <div style={styles.tagWrapper}>
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} style={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "clamp(3.5rem, 7vw, 6rem) 1.25rem",
    backgroundColor: "#f8fafc",
    scrollMarginTop: "5rem",
  },
  container: {
    maxWidth: "1150px",
    margin: "0 auto",
  },
  header: {
    marginBottom: "3rem",
    textAlign: "left",
  },
  badge: {
    fontSize: "0.75rem",
    fontWeight: "700",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#0284c7",
    display: "inline-block",
    marginBottom: "0.5rem",
  },
  heading: {
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
    fontWeight: "800",
    color: "#0f172a",
    margin: 0,
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#64748b",
    marginTop: "0.75rem",
    maxWidth: "600px",
    lineHeight: 1.6,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "14px",
    padding: "1.75rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
  },
  cardHeader: {
    marginBottom: "1.25rem",
  },
  categoryBadge: {
    fontSize: "0.7rem",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#0284c7",
    backgroundColor: "#e0f2fe",
    padding: "0.2rem 0.5rem",
    borderRadius: "4px",
    display: "inline-block",
    marginBottom: "0.75rem",
  },
  cardTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#0f172a",
    margin: "0 0 0.4rem 0",
    letterSpacing: "-0.01em",
  },
  cardDescription: {
    fontSize: "0.85rem",
    color: "#64748b",
    lineHeight: 1.5,
    margin: 0,
  },
  tagWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.45rem",
  },
  skillTag: {
    fontSize: "0.8rem",
    fontWeight: "500",
    color: "#334155",
    backgroundColor: "#f1f5f9",
    border: "1px solid #e2e8f0",
    padding: "0.3rem 0.65rem",
    borderRadius: "6px",
  },
};

export default Skills;