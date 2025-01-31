import React from "react";
import "../pagesStyle.css";
import ExtNavbar from "../ExternalNavbar/ExtNavbar";
import amoliImg1 from "../../assets/amoli1.jpg";
import amoliImg2 from "../../assets/amoli2.jpg";

const AmoliPage = () => {
  return (
    <>
      <ExtNavbar />
      <div className="main-section">
        <div className="section-heading-container">
          <h1>THE AMOLI TRUST</h1>
        </div>

        <div className="section-grid">
          <div className="section-grid-img">
            <div className="amoli-img-container-1">
              <div>
                <img src={amoliImg1} alt="" />
              </div>

              <div></div>
            </div>

            <div className="amoli-img-container-2">
              <div></div>

              <div>
                <img src={amoliImg2} alt="" />
              </div>
            </div>
          </div>
          <div className="section-grid-desc">
            <h4>Session Volunteer</h4>
            <p className="amoli-tagline">"When you are aware, you dare."</p>
            <p>
              Amoli Trust is a non-profit organization dedicated to educating
              young children about the prevention of child sexual abuse. With
              the alarming rise in cases of child sexual abuse in India and
              across the globe, it is crucial for every individual, especially
              the youth, to take proactive measures to combat this issue.
              <br />
              <br />
              In our sessions, we engage children using a thoughtfully crafted
              and interactive script. This script is designed to address all
              critical aspects of the topic in a manner that captures the
              children's attention and keeps them engaged with the content.
              <br />
              <br />
              The primary goal is to encourage children to openly communicate
              with their parents or trusted adults, ensuring they recognize and
              report any inappropriate behavior or situations. By fostering
              awareness and empowering them to speak up, we aim to protect
              children from harm and create a safer environment for them.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AmoliPage;
