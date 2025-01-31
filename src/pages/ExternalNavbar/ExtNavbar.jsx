import React from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./ExtNavbar.css";
import navLogo from "/EG.png";

const ExtNavbar = () => {
  const navigate = useNavigate();

  const handleNavigate = (section) => {
    navigate("/"); // Ensure you're on the homepage
    setTimeout(() => {
      document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    }, 100); // Allow time for the route to load
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-logo">
          <img src={navLogo} alt="Logo" onClick={() => navigate("/")} />
        </div>

        <div className="navbar-text-container">
          <div className="navbar-text">
            <ul className="navbar-links">
              <li className="navbar-link">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={() => handleNavigate("about")}
                >
                  About Me
                </Link>
              </li>
              <li className="navbar-link">
                <Link
                  to="experience"
                  smooth={true}
                  duration={500}
                  onClick={() => handleNavigate("experience")}
                >
                  Experience
                </Link>
              </li>
              <li className="navbar-link">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  onClick={() => handleNavigate("projects")}
                >
                  Projects
                </Link>
              </li>
              <li className="navbar-link">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  onClick={() => handleNavigate("contact")}
                >
                  Contact me
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

export default ExtNavbar;
