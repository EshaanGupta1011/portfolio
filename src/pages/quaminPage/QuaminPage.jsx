import React from "react";
import "../pagesStyle.css";
import ExtNavbar from "../ExternalNavbar/ExtNavbar";
import quaminImg from "../../assets/exp-4.png";

const QuaminPage = () => {
  return (
    <>
      <ExtNavbar />
      <div className="main-section">
        <div className="section-heading-container">
          <h1>QUAMIN TECH SOLUTIONS LPP.</h1>
        </div>

        <div className="section-grid">
          <div className="section-grid-img">
            <img src={quaminImg} alt="" />
          </div>
          <div className="section-grid-desc">
            <h4>Web Development Lead Intern</h4>
            <p>
              Quamin Solutions LLP is an innovative company dedicated to
              delivering cutting-edge solutions across various domains,
              including agriculture and healthcare. With a vision to transform
              industries through technology, the company focuses on creating
              impactful digital products that address real-world challenges.
              <br />
              <br />
              As a lead web development intern at Quamin Solutions LLP, I am
              responsible for designing and developing websites for the company,
              including its main website, the AgriCare platform, and
              health-related projects. My role spans across the front end, where
              I craft user-friendly interfaces, and the back end, where I ensure
              robust functionality and seamless database integration.
              Additionally, I had the opportunity to design the company’s logo,
              adding a creative touch to its branding.
              <br />
              <br />
              This experience has been both challenging and fulfilling, allowing
              me to contribute to diverse projects while honing my technical and
              creative skills. Collaborating with a dynamic team, I take pride
              in developing platforms that align with Quamin Solutions' mission
              to innovate and make a difference.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuaminPage;
