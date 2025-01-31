import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import navLogo from "/EG.png";

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const threshold = 500; // Adjust this value to set the desired scroll height
    const handleScroll = () => {
      setIsAtTop(window.scrollY < threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-container ${isAtTop ? "transparent" : "solid"}`}>
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="hero" smooth={true} duration={500}>
            <img src={navLogo} alt="Logo" />
          </Link>
        </div>

        <div className="navbar-text-container">
          <div className={`navbar-text ${isAtTop ? "hidden" : ""}`}>
            <ul className="navbar-links">
              <li className="navbar-link">
                <Link to="education" smooth={true} duration={500}>
                  Education
                </Link>
              </li>
              <li className="navbar-link">
                <Link to="experience" smooth={true} duration={500}>
                  Experience
                </Link>
              </li>
              <li className="navbar-link">
                <Link to="projects" smooth={true} duration={500}>
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-icons">
            <a
              href="https://www.linkedin.com/in/eshaan-gupta-0a97a6247/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-linkedin" className="navbar-icon"></ion-icon>
            </a>
            <a
              href="https://github.com/EshaanGupta1011"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-github" className="navbar-icon"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
