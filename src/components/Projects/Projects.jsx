import React from "react";
import "./Projects.css";
import projectData from "../../assets/data/projectData.js";
import useScrollReveal from "../../hooks/useScrollReveal";

const Projects = () => {
  const ref = useScrollReveal();

  return (
    <div className="section-projects" id="projects">
      <div className="reveal" ref={ref}>
        <div className="projects-heading-container">
          <h1>PROJECTS</h1>
        </div>

        <div className="projects-desc-container">
          <p>
            I have many projects in the field of{" "}
            <span>machine learning, web development </span>
            and even <span>cloud computing</span>. I have acquired these skills by
            learning from various platforms like Udemy, YouTube and workshops
            conducted by various organisations.
            <br />
            <br />
            Some of my projects are listed below. Click any to explore more about
            the project :
          </p>
        </div>

        <div className="projects-container">
          {projectData.map((item, index) => (
            <div key={index} className="project-container">
              <div className="project-container-img">
                <a href={item.link} target="blank">
                  <img src={item.img} alt="" />
                </a>
              </div>
              <div className="project-desc-container">
                <a href={item.link} target="blank">
                  <p className="project-desc-container-title">{item.title}</p>
                </a>
                <p className="project-desc-container-desc">{item.desc}</p>
                <a href={item.pdfLink} target="blank">
                  <p className="project-desc-container-readMore">
                    {item.readLink}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
