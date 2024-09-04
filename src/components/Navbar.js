import React from "react";
import logo from "../pngwing.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { VscGlobe } from "react-icons/vsc";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import SocialFollow from "../SocialFollow";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <SocialFollow />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link to="home" className="nav-link" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" offset={-60} className="nav-link" href="#">
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="services" offset={-60} className="nav-link" href="#">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="education" offset={-60} className="nav-link" href="#">
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="testimonials"
                offset={-40}
                className="nav-link"
                href="#"
              >
                Stacks
              </Link>
            </li>
            <li className="nav-item">
              <Link to="experience" offset={-40} className="nav-link" href="#">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link to="portfolio" offset={10} className="nav-link" href="#">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contacts" offset={-58} className="nav-link" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
