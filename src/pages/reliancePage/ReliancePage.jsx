import React from "react";
import "../pagesStyle.css";
import ExtNavbar from "../ExternalNavbar/ExtNavbar";
import sasanImg from "../../assets/sasan.png";

const ReliancePage = () => {
  return (
    <>
      <ExtNavbar />
      <div className="main-section">
        <div className="section-heading-container">
          <h1>SASAN POWER PLANT , RELIANCE POWER LTD.</h1>
        </div>

        <div className="section-grid">
          <div className="section-grid-img">
            <img src={sasanImg} alt="" />
          </div>
          <div className="section-grid-desc">
            <h4>Summer Internship 2024</h4>
            <p>
              Sasan Power Plant is a geothermal plant owned by Reliance Power
              Limited. The plant generates 660MW of electricity with each unit.
              Having 6 units, the total comes up to a whopping 1960MW.
              <br />
              <br />I got the opportunity to work as a summer intern. I worked
              under the mentorship and guidance of Mr. Nishant Gupta, Assistant
              Vice President of Training and Development Department. I was
              handed the project with title{" "}
              <span className="section-grid-desc-blue">
                Grid Frequency Prediction using Time Series Analysis.
              </span>
              <br />
              <br />I was provided with a dataset containing grid frequencies
              for the year 2021 to 2024. I was assigned the task to make a
              machine learning model that can predict the grid frequencies with
              minimum error. This will help to study the grid behaviour and it
              may be used to find faults in the grid as well.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReliancePage;
