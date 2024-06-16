import React from "react";
import emailIcon from "../assets/email.png";
import linkedInIcon from "../assets/linkedin.png";

const ContactMe = () => {
  return (
    <>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src={emailIcon}
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="sachinnagila2053@gmail.com">
                sachinnagila2053@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src={linkedInIcon}
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <a
                href="https://www.linkedin.com/in/sachinnagila/"
                target="black"
                rel="noopeaner noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
