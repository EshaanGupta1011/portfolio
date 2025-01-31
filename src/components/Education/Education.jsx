import React from "react";
import "./Education.css";
import eduImg1 from "../../assets/education-1.jpg";
import eduImg2 from "../../assets/education-2.jpg";

const Education = () => {
  return (
    <div className="section-education" id="education">
      <div className="education-heading">
        <h1>EDUCATION</h1>
      </div>

      <div className="education-container">
        <div className="education-container-img">
          <img src={eduImg1} alt="" />
        </div>

        <div className="education-container-text">
          <p>
            Mount St’ Mary’s School will always hold a special place in my
            heart. The teachers there taught me how to be gentle, smart and act
            responsibly. The school provided various opportunities to showcase
            my talents and skills.
            <br />
            <br />
            As the{" "}
            <span className="education-text-highlight">
              General Secretary
            </span>{" "}
            of The Matrix Clan (2021-22), I was given the responsibility to host
            the biggest tech competition of our school, The Matrix Ecomm Buzz.
            <br />
            <br />
            Education was always a top priority in Mount St’ Mary’s. I secured a
            perfect score of{" "}
            <span className="education-text-highlight">
              100 in Mathematics
            </span>{" "}
            in both 10th and 12th CBSE Boards Examinations. I was honored with{" "}
            <span className="education-text-highlight">
              Brij Gala Bhushan Award
            </span>{" "}
            for being topper in Mathematics and{" "}
            <span className="education-text-highlight">
              Academic Excellence Award
            </span>{" "}
            for securing <span className="education-text-highlight">93% </span>
            in my 12th standard.
          </p>
        </div>

        <div className="education-container-text">
          <p>
            I am currently pursuing a Bachelor of Technology in{" "}
            <span className="education-text-highlight">
              Artificial Intelligence and Machine Learning
            </span>{" "}
            from the University School of Automation and Robotics, Guru Gobind
            Singh Indraprastha University.
            <br />
            <br />
            Throughout my academic journey, I have actively participated in
            numerous team-oriented activities and competitions, showcasing my
            collaborative and problem-solving skills. I am also an{" "}
            <span className="education-text-highlight">
              enthusiastic member{" "}
            </span>
            of various technical and cultural societies, which have provided me
            with opportunities to grow both{" "}
            <span className="education-text-highlight">
              technically and creatively.
            </span>
            <br />
            <br />
            As the{" "}
            <span className="education-text-highlight">
              Vice Chairperson
            </span>{" "}
            of The Science Club, I am committed to fostering curiosity and
            enthusiasm for science. I strive to create engaging experiences by
            organizing impactful events, including memorable scientific visits,
            that inspire participants and broaden their horizons.
          </p>
        </div>

        <div className="education-container-img">
          <img src={eduImg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Education;
