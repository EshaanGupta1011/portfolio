import React from "react";
import "../pagesStyle.css";
import ExtNavbar from "../ExternalNavbar/ExtNavbar";
import terafacImg from "../../assets/exp-8.png";

const TerafacPage = () => {
  return (
    <>
      <ExtNavbar />
      <div className="main-section">
        <div className="section-heading-container">
          <h1>TERAFAC TECHNOLOGIES</h1>
        </div>

        <div className="section-grid">
          <div className="acm-section-grid-img">
            <img src={terafacImg} alt="Terafac Technologies" />
          </div>
          <div className="section-grid-desc">
            <h4>Junior Machine Learning & Data Engineer</h4>

            <p>
              Terafac Technologies is an innovative industrial automation firm 
              focused on integrating advanced intelligence into robotics and manufacturing 
              workflows. The engineering team specializes in deploying state-of-the-art 
              perception systems to handle complex real-world operational challenges.
              <br />
              <br />
              In this role, my work centers on deep learning research and practical 
              computer vision techniques. I am responsible for training robust machine 
              learning models, implementing advanced object tracking pipelines, and exploring 
              cutting-edge 2D-to-3D reconstruction methodologies to bridge the gap between 
              standard camera inputs and spatial execution.
              <br />
              <br />
              Focusing heavily on 3D vision, geometric foundation models, and custom dataset 
              training pipelines, this position bridges academic research and industrial-grade 
              deployment. The systems built directly enhance the precision, adaptability, and 
              autonomy of hardware in active production environments.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TerafacPage;
