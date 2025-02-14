import React from "react";
import "./Hero.css";
import heroBgImg from "../../assets/heroBgImg.jpg";
import heroImg from "../../assets/heroImg.jpg";
import resume from "../../assets/pdf/EshaanResume.pdf";

const Hero = () => {
  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    const rotateX = y * -20;
    const rotateY = x * 20;

    event.currentTarget.querySelector(
      "img"
    ).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.querySelector(
      "img"
    ).style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${heroBgImg})` }}
      id="hero"
    >
      <div className="hero">
        <div
          className="hero-img"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img src={heroImg} alt="eshaan's image" />
        </div>

        <div className="hero-text">
          <h1 className="hero-title">
            ESHAAN <span className="hero-title-surname">GUPTA</span>
          </h1>
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
