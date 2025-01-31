import React from "react";
import "../pagesStyle.css";
import ExtNavbar from "../ExternalNavbar/ExtNavbar";
import darpanImg from "../../assets/darpan.png";

const DarpanPage = () => {
  return (
    <>
      <ExtNavbar />
      <div className="main-section">
        <div className="section-heading-container">
          <h1>DARPAN - THE PHOTOGRAPHY CLUB</h1>
        </div>

        <div className="section-grid">
          <div className="section-grid-img">
            <img src={darpanImg} alt="" />
          </div>
          <div className="section-grid-desc">
            <h4>Core Team Photographer</h4>
            <p>
              Photography has always been a cherished and comforting hobby for
              me. I don’t usually roam around with my camera, but I make it a
              point to capture beautiful moments whenever the opportunity
              arises.
              <br />
              <br />
              My journey into photography began when my father gifted me a DSLR.
              I was a curious beginner and, in my excitement, set the aperture
              to its maximum, briefly panicking that I might have broken it. The
              relief and joy I felt upon realizing everything was fine marked
              the start of my passion for this art form.
              <br />
              <br />
              Over time, I honed my skills and achieved recognition as a
              photographer. I won intra-school photography competitions and even
              had the privilege of organizing and judging a few. I was also a
              core member of Darpan, the photography and videography society at
              USAR, where I took on the responsibility of covering various
              college events. This experience not only refined my craft but also
              deepened my appreciation for storytelling through visuals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DarpanPage;
