import React from "react";
import "./AboutMe.css";
import aboutMeImg from "../../assets/aboutMe-1.png";

const AboutMe = () => {
  return (
    <div className="section-aboutMe" id="about">
      <div className="aboutMe">
        <h1 className="aboutMeHeading">
          ABOUT <span className="aboutMeHeadingStyle">ME</span>
        </h1>

        <div className="aboutMe-grid">
          <div className="aboutMe-Text">
            <p>
              As a passionate
              <span className="aboutMe-Text-Highlight"> AI/ML student,</span> I
              am fascinated by technology's transformative future. Driven by a
              love for data, I focus on enabling machines to learn and adapt
              through advanced techniques while continually exploring innovative
              applications.
              <br />
              <br />
              Beyond my work in AI/ML, I have honed my skills as a
              <span className="aboutMe-Text-Highlight">
                {" "}
                full stack web developer{" "}
              </span>
              , enabling me to build robust and scalable digital solutions.
              However, my curiosity didn’t stop there—my desire to create more
              engaging and user-friendly experiences led me to explore and
              develop expertise in{" "}
              <span className="aboutMe-Text-Highlight"> design.</span>
              <br />
              <br />
              This combination of technical and creative skills equips me to
              contribute to innovative, cutting-edge projects that bridge
              technology and design.
            </p>
          </div>

          <div className="aboutMe-Img">
            <img src={aboutMeImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
