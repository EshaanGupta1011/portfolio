import React from "react";
import "../pagesStyle.css";
import ExtNavbar from "../ExternalNavbar/ExtNavbar";
import SciClubImg from "../../assets/sciClub.jpg";

const SciClubPage = () => {
  return (
    <>
      <ExtNavbar />
      <div className="main-section">
        <div className="section-heading-container">
          <h1>THE SCIENCE CLUB - USAR</h1>
        </div>

        <div className="section-grid">
          <div className="section-grid-img">
            <img src={SciClubImg} alt="" />
          </div>
          <div className="section-grid-desc">
            <h4>Vice Chairperson</h4>
            <p>
              The Science Club of USAR is a vibrant platform for fostering
              curiosity and promoting scientific exploration among students. As
              the Vice Chairperson of the club, I have been actively involved in
              organizing various activities and trips that inspire a deeper
              understanding of science and its applications.
              <br />
              <br />
              We have successfully organized several educational trips,
              including one to the National Physical Laboratory (NPL), where
              students explored cutting-edge research in physics and met leading
              scientists. Another notable trip was to the India Meteorological
              Department (IMD), where we learned about weather forecasting and
              its significance in daily life and disaster management. These
              experiences provided invaluable insights into real-world
              scientific endeavors.
              <br />
              <br />
              My deep interest in science has always driven me to seek
              opportunities that merge knowledge with hands-on experiences.
              Being part of the Science Club has allowed me to channel this
              passion into initiatives that inspire others and promote a culture
              of learning and discovery.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SciClubPage;
