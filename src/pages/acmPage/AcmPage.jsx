import React from "react";
import "../pagesStyle.css";
import ExtNavbar from "../ExternalNavbar/ExtNavbar";
import acmImg from "../../assets/acm.png";

const AcmPage = () => {
  return (
    <>
      <ExtNavbar />
      <div className="main-section">
        <div className="section-heading-container">
          <h1>ASSOCIATION FOR COMPUTING MACHINERY</h1>
        </div>

        <div className="section-grid">
          <div className="acm-section-grid-img">
            <img src={acmImg} alt="" />
          </div>
          <div className="section-grid-desc">
            <h4>Frontend Web Development Team</h4>

            <p>
              The Association for Computing Machinery (ACM) is a renowned
              organization that fosters innovation and collaboration in
              computing. It provides a platform for individuals to explore,
              learn, and contribute to advancements in technology through
              events, workshops, and research.
              <br />
              <br />
              As a front-end developer in the ACM team, I am helping design and
              develop its main website. Working alongside a talented team, I
              focus on creating a user-friendly interface, implementing
              responsive designs, and ensuring an optimal user experience.
              <br />
              <br />
              This collaborative project has been a rewarding journey, allowing
              me to apply my skills while contributing to ACM’s digital
              presence. It’s fulfilling to see our efforts shape a platform that
              reflects ACM’s vision and values.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcmPage;
