import React, { useState } from 'react';

function Projects() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projectList = [
    {
      id: 1,
      title: "Commercial E-Commerce Platform",
      category: "Full-Stack Web",
      description:
        "Full-stack digital storefront featuring dynamic product browsing, persistent cart sessions, JWT authentication, and end-to-end Stripe checkout with automated receipt delivery.",
      tags: ["React", "Django REST", "PostgreSQL", "Stripe API", "Netlify", "Render"],
      github: "https://github.com/Tobiscus100/ecommerce-project",
      demo: "https://premium-shopweb.netlify.app",
    },
    {
      id: 2,
      title: "Advice Generator App",
      category: "Frontend Application",
      description:
        "Interactive web application that fetches dynamic advice slips via the Advice Slip REST API, featuring responsive layout design, state persistence, and clean asynchronous data handling.",
      tags: ["React", "TypeScript", "TanStack Query", "REST API", "Tailwind CSS"],
      github: "https://github.com/Tobiscus100/advice-generator",
      demo: "https://advice-generator-tobiscus.netlify.app", // Adjust if your Netlify subdomain uses a slightly different name
    },
    {
      id: 3,
      title: "Digital Agency Landing Page",
      category: "Frontend Landing Page",
      description:
        "A modern, high-performance landing page for a digital engineering agency built using semantic HTML5, modern CSS3 (Flexbox & CSS Grid), and vanilla JavaScript.",
      tags: ["HTML5", "CSS3", "JavaScript", "Flexbox", "CSS Grid"],
      github: "https://github.com/Tobiscus100/codveda-frontend-tasks",
      demo: null,
    },
    {
      id: 4,
      title: "Interactive Task & Todo App",
      category: "Frontend Application",
      description:
        "Modern task management application engineered in React. Includes dynamic task filtering by status, real-time updates, and local storage state persistence.",
      tags: ["React", "JavaScript", "CSS3", "State Management"],
      github: "https://github.com/Tobiscus100/my-todo-app",
      demo: null,
    },
    
  ];

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.badge}>Featured Work</span>
          <h2 style={styles.heading}>Projects & Engineering Case Studies</h2>
          <p style={styles.subtitle}>
            A showcase of full-stack platforms, client systems, and interactive applications I've engineered.
          </p>
        </div>

        {/* Project Grid */}
        <div style={styles.grid}>
          {projectList.map((project) => {
            const isHovered = hoveredCard === project.id;
            return (
              <article
                key={project.id}
                style={{
                  ...styles.card,
                  transform: isHovered ? "translateY(-5px)" : "none",
                  borderColor: isHovered ? "#64ffda" : "#233554",
                  boxShadow: isHovered
                    ? "0 12px 24px -10px rgba(0, 0, 0, 0.4)"
                    : "0 4px 16px rgba(0, 0, 0, 0.2)",
                }}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Category Badge */}
                <div style={styles.cardHeader}>
                  <span style={styles.category}>{project.category}</span>
                </div>

                {/* Body */}
                <h3 style={styles.cardTitle}>{project.title}</h3>
                <p style={styles.description}>{project.description}</p>

                {/* Tech Badges */}
                <div style={styles.tagWrapper}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} style={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer / Links */}
                <div style={styles.cardFooter}>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.primaryLink}
                    >
                      Live Demo &rarr;
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.secondaryLink}
                    >
                      Source Code ↗
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "clamp(3.5rem, 8vw, 6.5rem) 1.25rem",
    backgroundColor: "#0a192f",
    scrollMarginTop: "70px",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  header: {
    marginBottom: "2.5rem",
    textAlign: "left",
  },
  badge: {
    fontSize: "0.8rem",
    fontWeight: "600",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#64ffda",
    display: "inline-block",
    marginBottom: "0.5rem",
    fontFamily: "monospace",
  },
  heading: {
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
    fontWeight: "700",
    color: "#e6f1ff",
    margin: 0,
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#8892b0",
    marginTop: "0.5rem",
    maxWidth: "600px",
    lineHeight: 1.6,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    backgroundColor: "#112240",
    border: "1px solid #233554",
    borderRadius: "12px",
    padding: "1.75rem",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
  },
  cardHeader: {
    marginBottom: "0.75rem",
  },
  category: {
    fontSize: "0.75rem",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#64ffda",
    fontFamily: "monospace",
  },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: "#e6f1ff",
    margin: "0 0 0.6rem 0",
    letterSpacing: "-0.01em",
  },
  description: {
    fontSize: "0.925rem",
    color: "#8892b0",
    lineHeight: 1.6,
    marginBottom: "1.25rem",
    flexGrow: 1,
  },
  tagWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
    marginBottom: "1.5rem",
  },
  tag: {
    fontSize: "0.75rem",
    fontFamily: "monospace",
    color: "#ccd6f6",
    backgroundColor: "#1b2a44",
    border: "1px solid #233554",
    padding: "0.25rem 0.6rem",
    borderRadius: "6px",
  },
  cardFooter: {
    display: "flex",
    alignItems: "center",
    gap: "1.25rem",
    paddingTop: "1rem",
    borderTop: "1px solid #233554",
  },
  primaryLink: {
    color: "#64ffda",
    textDecoration: "none",
    fontSize: "0.875rem",
    fontWeight: "600",
  },
  secondaryLink: {
    color: "#8892b0",
    textDecoration: "none",
    fontSize: "0.875rem",
    fontWeight: "500",
  },
};

export default Projects;