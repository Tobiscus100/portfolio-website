import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Tobi.dev</h2>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#cybersecurity" onClick={toggleMenu}>Cybersecurity</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;