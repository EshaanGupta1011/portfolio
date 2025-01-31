import React from "react";
import "./Experience.css";
import { useNavigate } from "react-router-dom";
import experienceData from "../../assets/data/experienceData.js";

const Experience = () => {
  const navigate = useNavigate();

  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100; // X as percentage
    const y = ((event.clientY - rect.top) / rect.height) * 100; // Y as percentage

    card.style.setProperty("--x-pos", `${x}%`);
    card.style.setProperty("--y-pos", `${y}%`);
  };

  const cards = document.querySelectorAll(".experience-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", handleMouseMove);
  });

  return (
    <div className="section-experience" id="experience">
      <div className="experience-heading-container">
        <h1>EXPERIENCE</h1>
      </div>

      <div className="experience-text">
        <p>
          I have dedicated some of the most significant years of my life to
          building work experience and expanding my knowledge. To gain deeper
          insights, I have explored various domains where I can effectively
          apply my skills.
          <br />
          <br />
          Feel free to explore the experiences below to see how I have
          contributed to each field.
        </p>
      </div>

      <div className="experience-cards-container">
        {experienceData.map((item, index) => (
          <a key={index} onClick={() => navigate(`/${item.route}`)}>
            <div
              className="experience-card"
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100; // X as percentage
                const y = ((e.clientY - rect.top) / rect.height) * 100; // Y as percentage

                card.style.setProperty("--x-pos", `${x}%`);
                card.style.setProperty("--y-pos", `${y}%`);
              }}
            >
              <div className="experience-card-img">
                <img src={item.img} alt="" />
              </div>
              <div className="experience-card-text">
                <p className="experience-card-text-heading">{item.heading}</p>
                <p className="experience-card-text-role">{item.role}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Experience;
