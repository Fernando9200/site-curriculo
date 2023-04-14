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
            <p style={{textAlign: 'justify', marginRight: '100px', marginTop: '25px'}}>
            I pursued my degree in physics at the Federal University of Espírito Santo (UFES), driven by a dream to become a researcher. However, it wasn't until I took a programming course that I discovered my true passion for IT. I was immediately captivated and knew that this was the field I wanted to pursue. Since then, I have been continuously learning and honing my skills, driven by a deep curiosity and desire to stay at the forefront of this dynamic and constantly evolving industry.
            </p>
        </div>
      </div>
  </div>);
};

export default AboutMe;
