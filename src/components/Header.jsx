import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Sachin Nagila</div>
        <div>
          <ul className="nav-links">
            <li>
              <Link to="/about" className="custom-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/experience" className="custom-link">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/projects" className="custom-link">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="custom-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
