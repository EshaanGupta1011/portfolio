import React, { useRef, useEffect } from "react";
import "./Experience.css";
import { useNavigate } from "react-router-dom";
import experienceData from "../../assets/data/experienceData.js";
import useScrollReveal from "../../hooks/useScrollReveal";

const Experience = () => {
  const navigate = useNavigate();
  const headingRef = useScrollReveal();
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const container = cardsContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const wrappers = container.querySelectorAll(".experience-card-wrapper");
          wrappers.forEach((el, i) => {
            setTimeout(() => el.classList.add("revealed"), i * 110);
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const cx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const cy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--x-pos", `${x}%`);
    card.style.setProperty("--y-pos", `${y}%`);
    card.style.transform = `perspective(900px) rotateX(${cy * -7}deg) rotateY(${cx * 7}deg) scale(1.02)`;
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="section-experience" id="experience">
      <div className="experience-header reveal" ref={headingRef}>
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
      </div>

      <div className="experience-cards-container" ref={cardsContainerRef}>
        {experienceData.map((item, index) => (
          <div
            key={index}
            className="experience-card-wrapper reveal"
            onClick={() => navigate(`/${item.route}`)}
          >
            <div
              className="experience-card"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="experience-card-img">
                <img src={item.img} alt="" />
              </div>
              <div className="experience-card-text">
                <p className="experience-card-text-heading">{item.heading}</p>
                <p className="experience-card-text-role">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
