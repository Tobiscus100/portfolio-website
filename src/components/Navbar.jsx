import React, { useState, useEffect } from "react";

function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    "Home",
    "About",
    "Cybersecurity",
    "Projects",
    "Skills",
    "Contact",
  ];

  // Detect scroll to enhance backdrop shadow dynamically
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        ...styles.header,
        backgroundColor: scrolled ? "rgba(10, 25, 47, 0.92)" : "#0a192f",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.25)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
      }}
    >
      <div style={styles.navContainer}>
        {/* Brand Logo */}
        <a href="#home" style={styles.logoLink} onClick={closeMobileMenu}>
          <span style={styles.logoAccent}>&lt;</span>
          Tobi.dev
          <span style={styles.logoAccent}> /&gt;</span>
        </a>

        {/* Desktop Navigation Links */}
        <div style={styles.desktopLinks} className="desktop-only">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                ...styles.link,
                color: hovered === link ? "#38bdf8" : "#94a3b8",
                borderBottom:
                  hovered === link
                    ? "2px solid #38bdf8"
                    : "2px solid transparent",
              }}
              onMouseEnter={() => setHovered(link)}
              onMouseLeave={() => setHovered(null)}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          style={styles.hamburgerBtn}
          className="mobile-only"
        >
          <span
            style={{
              ...styles.hamburgerBar,
              transform: mobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <span
            style={{
              ...styles.hamburgerBar,
              opacity: mobileMenuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              ...styles.hamburgerBar,
              transform: mobileMenuOpen ? "rotate(-45deg) translate(6px, -6px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div style={styles.mobileDropdown}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={styles.mobileLink}
              onClick={closeMobileMenu}
            >
              {link}
            </a>
          ))}
        </div>
      )}

      {/* Inline styles for basic media query handling without external CSS */}
      <style>{`
        .desktop-only { display: flex; }
        .mobile-only { display: none; }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    width: "100%",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
  },
  navContainer: {
    maxWidth: "1150px",
    margin: "0 auto",
    padding: "1rem 1.25rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoLink: {
    textDecoration: "none",
    fontSize: "1.25rem",
    fontWeight: "700",
    color: "#f8fafc",
    letterSpacing: "-0.02em",
    cursor: "pointer",
  },
  logoAccent: {
    color: "#38bdf8",
    fontFamily: "monospace",
  },
  desktopLinks: {
    display: "flex",
    alignItems: "center",
    gap: "1.75rem",
  },
  link: {
    textDecoration: "none",
    fontSize: "0.925rem",
    fontWeight: "500",
    cursor: "pointer",
    paddingBottom: "4px",
    transition: "color 0.2s ease, border-color 0.2s ease",
  },
  hamburgerBtn: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "0.5rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    width: "38px",
    height: "38px",
  },
  hamburgerBar: {
    width: "22px",
    height: "2px",
    backgroundColor: "#f8fafc",
    transition: "all 0.3s ease",
    display: "block",
  },
  mobileDropdown: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0b192e",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    padding: "1rem 1.25rem 1.5rem",
    gap: "0.85rem",
  },
  mobileLink: {
    color: "#cbd5e1",
    textDecoration: "none",
    fontSize: "1.05rem",
    fontWeight: "500",
    padding: "0.5rem 0",
    borderBottom: "1px solid rgba(255,255,255,0.04)",
  },
};

export default Navbar;