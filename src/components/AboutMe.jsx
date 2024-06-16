import React from "react";
import profilePic from "../assets/profilePic.png";
import experienceIcon from "../assets/experience.png";
import educationIcon from "../assets/education.png";
import arrowIcon from "../assets/arrow.png";

const AboutMe = () => {
  return (
    <>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src={profilePic} alt="Profile picture" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src={experienceIcon}
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>
                  1+ years <br />
                  Full Stack Development
                </p>
              </div>
              <div className="details-container">
                <img
                  src={educationIcon}
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>
                  Full Stack Bootcamp
                  <br />
                  BPA Bachelor's Degree
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Hello! I'm Sachin Nagila, a passionate coder on an exciting
                journey into the world of programming. My career path has been
                anything but traditional, and I'm proud of the unique
                experiences that have shaped who I am today. <br /> Driven by a
                lifelong interest in technology, I decided to follow my heart
                and dive into the world of coding. Learning programming has been
                an incredibly fulfilling experience, blending my love for
                creativity and problem-solving with the thrill of building
                something from scratch.
              </p>
            </div>
          </div>
        </div>
        <img src={arrowIcon} alt="Arrow icon" className="icon arrow" />
      </section>
    </>
  );
};

export default AboutMe;
