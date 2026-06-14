import React from "react";
import "./Research.css";
import { useNavigate } from "react-router-dom";
import useScrollReveal from "../../hooks/useScrollReveal";

const Research = () => {
  const navigate = useNavigate();
  const ref = useScrollReveal();

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const cx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const cy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--x-pos", `${x}%`);
    card.style.setProperty("--y-pos", `${y}%`);
    card.style.transform = `perspective(900px) rotateX(${cy * -6}deg) rotateY(${cx * 6}deg) scale(1.02)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="section-research" id="research">
      <div className="research-inner reveal" ref={ref}>
        <div className="research-heading-container">
          <h1>RESEARCH</h1>
        </div>

        <div className="experience-text">
          <p>
            I am deeply passionate about research and constantly strive to stay
            up to date with the latest models, papers, and advancements in AI.
            I enjoy reading, experimenting, and contributing to research whenever
            I get the opportunity.
          </p>
        </div>

        <div className="research-card-wrapper">
          <div
            className="research-card"
            onClick={() => navigate("/research")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="research-card-icon">
              <span>研究</span>
            </div>

            <div className="research-card-text">
              <p className="research-card-venue">ICMLSC 2026 · Osaka, Japan</p>
              <p className="research-card-title">
                DR_VisionNet: A vision network for classification of diabetic
                retinopathy
              </p>
              <p className="research-card-role">
                First Author &nbsp;·&nbsp; Conference Paper
              </p>
            </div>

            <span className="research-card-arrow">→</span>
          </div>
        </div>

        <p className="research-footer-note">And many more to come....</p>
      </div>
    </div>
  );
};

export default Research;
