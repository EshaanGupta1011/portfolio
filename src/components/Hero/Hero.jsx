import React, { useState, useEffect } from "react";
import "./Hero.css";
import heroBgImg from "../../assets/heroBgImg.jpg";
import heroImg from "../../assets/heroImg.jpg";
import resume from "../../assets/pdf/EshaanResume.pdf";

const ROLES = [
  "Machine Learning Practitioner",
  "Computer Vision Specialist",
  "Deep Learning Scientist",
  "AI Research Developer",
  "3D Vision & Perception Architect",
  "Applied ML Scientist"
];

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[roleIdx];
    let timeout;

    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => {
        setDisplayText(word.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, 75);
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayText(word.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, 45);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIdx((r) => (r + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  const handleContainerMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--glow-x", `${x}%`);
    e.currentTarget.style.setProperty("--glow-y", `${y}%`);
  };

  const handleImgMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    event.currentTarget.querySelector("img").style.transform =
      `perspective(1000px) rotateX(${y * -20}deg) rotateY(${x * 20}deg)`;
  };

  const handleImgMouseLeave = (event) => {
    event.currentTarget.querySelector("img").style.transform =
      `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      className="hero-container"
      id="hero"
      style={{ backgroundImage: `url(${heroBgImg})` }}
      onMouseMove={handleContainerMouseMove}
    >
      <div className="hero">
        <div
          className="hero-img"
          onMouseMove={handleImgMouseMove}
          onMouseLeave={handleImgMouseLeave}
        >
          <img src={heroImg} alt="eshaan's image" />
        </div>

        <div className="hero-text">
          <h1 className="hero-title">
            ESHAAN <span className="hero-title-surname">GUPTA</span>
          </h1>
          <p className="hero-subtitle">
            <span className="hero-role">{displayText}</span>
            <span className="hero-cursor">|</span>
          </p>
          <div className="hero-btn-container">
            <a href={resume} target="blank">
              <button className="hero-btn">RESUME</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
