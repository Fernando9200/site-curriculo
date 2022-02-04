import React from "react";
import author from "../Foto-perfil.jpg";

const AboutMe = () => {
  return (
  <div id="about" className="py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
                <img className="profile-img" src={author} alt="author..."></img>
            </div>
        </div>
        <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">about me</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
      </div>
  </div>);
};

export default AboutMe;
