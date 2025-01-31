import React from "react";
import "../pagesStyle.css";
import ExtNavbar from "../ExternalNavbar/ExtNavbar";
import DvImg from "../../assets/exp-5.png";

const DvPage = () => {
  return (
    <>
      <ExtNavbar />
      <div className="main-section">
        <div className="section-heading-container">
          <h1>DANT VILLA DENTAL CLINIC</h1>
        </div>

        <div className="section-grid">
          <div className="section-grid-img">
            <img src={DvImg} alt="" />
          </div>
          <div className="section-grid-desc">
            <h4>Website Developer</h4>
            <p>
              Dant Villa Dental Clinic is a modern dental care facility
              dedicated to providing excellent oral health services. With a
              focus on patient comfort and cutting-edge treatments, the clinic
              stands out as a trusted name in dental care.
              <br />
              <br />
              My first-ever internship involved developing a website for Dant
              Villa Dental Clinic using React. The website allows users to
              explore details about the clinic and its doctors and provides a
              contact feature for seamless communication. By integrating dynamic
              components and ensuring a responsive design, I created a platform
              that enhances the clinic’s digital presence and accessibility.
              <br />
              <br />
              This internship marked a significant milestone in my journey as a
              developer. It gave me hands-on experience in web development and
              taught me the importance of user-centric design and functionality.
              Building this website was an enriching experience that laid the
              foundation for my career in technology.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DvPage;
