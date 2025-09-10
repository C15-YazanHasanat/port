import React from "react";
import "./../styles/Navbar.css";

const Navbar = () => {
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const targetPosition = target.offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800; 
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
      const r = ease(progress / duration);
      window.scrollTo(0, startPosition + distance * r);
      if (progress < duration) window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  };

  return (
    <nav className="navbar">
      <a className="logo" onClick={() => scrollToSection("hero")}>
        YazanH
      </a>
      <ul className="nav-links">
        <li>
          <a onClick={() => scrollToSection("hero")}>Home</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("about")}>About</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("projects")}>Projects</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("contact")}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
