import React from "react";
import profilePic from "../assets/profilePic.png";
import gitHub from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
const Profile = () => {
  return (
    <>
      <section id="profile">
        <div className="section__pic-container">
          <img
            src={profilePic}
            alt="Sachin Nagila profile picture"
            className="section__pic-container"
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Sachin Nagila</h1>
          <p className="section__text__p2">Full Stack Developer</p>
          <div className="btn-container">
            <button className="btn btn-color-2">Download CV</button>
            <button className="btn btn-color-1">Contact Info</button>
          </div>
          <div id="socials-container">
            <a
              href="https://www.linkedin.com/in/sachinnagila/"
              target="blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="My LinkedIn profile" className="icon " />
            </a>
            <a
              href="https://github.com/snagila"
              target="blank"
              rel="noopener noreferrer"
            >
              <img src={gitHub} alt="My Github profile" className="icon " />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
