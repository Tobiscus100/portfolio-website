import React, { useState } from "react";

function Navbar() {
  const [hovered, setHovered] = useState(null);

  const links = [
    "Home",
    "About",
    "Cybersecurity",
    "Projects",
    "Skills",
    "Contact",
  ];

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Tobi.dev</h2>

      <div style={styles.navLinks}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              ...styles.link,
              color: hovered === link ? "#00bfff" : "#fff",
              borderBottom:
                hovered === link ? "2px solid #00bfff" : "2px solid transparent",
            }}
            onMouseEnter={() => setHovered(link)}
            onMouseLeave={() => setHovered(null)}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#0a192f",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },

  navLinks: {
    display: "flex",
    gap: "20px",
  },

  link: {
    textDecoration: "none",
    fontSize: "15px",
    cursor: "pointer",
    paddingBottom: "5px",
    transition: "all 0.3s ease", // smooth hover
  },
};

export default Navbar;