import React from "react";
import App from "../../App";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import AboutMe from "../../components/AboutMe/AboutMe";
import Education from "../../components/Education/Education";
import Experience from "../../components/Experience/Experience";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Blog from "../../components/Blog/Blog";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Education />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
